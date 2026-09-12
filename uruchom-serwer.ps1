# Prosty lokalny serwer statyczny (bez Node.js / Pythona) do uruchamiania aplikacji BioKonkurs.
# Uzycie: kliknij prawym przyciskiem -> "Uruchom za pomoca PowerShell", albo w terminalu:
#   powershell -ExecutionPolicy Bypass -File uruchom-serwer.ps1
# Aplikacje mozna tez uruchomic bez tego skryptu, otwierajac plik index.html bezposrednio w przegladarce,
# albo (jesli wolisz) wdrozyc jako zwykla strone internetowa (np. GitHub Pages) — to czysto statyczne pliki.
#
# Serwer nasluchuje na WSZYSTKICH interfejsach sieciowych (nie tylko na tym komputerze), dzieki czemu
# mozna otworzyc aplikacje takze na telefonie podlaczonym do tej samej sieci Wi-Fi — zobacz adres
# "Dla telefonu (ta sama siec Wi-Fi)" wypisany ponizej po uruchomieniu. Uzyto zwyklego gniazda TCP
# (System.Net.Sockets.TcpListener), a nie System.Net.HttpListener, poniewaz to drugie wymagaloby
# uprawnien administratora do nasluchiwania na adresie innym niz localhost.
#
# Kazde polaczenie jest obslugiwane w osobnym watku (RunspacePool), zeby przegladarka mogla
# pobierac wiele plikow rownoczesnie (tak jak robi to przy starcie aplikacji — dziesiatki plikow JS).

param(
  [int]$Port = 8877
)

$root = $PSScriptRoot
$mimeMap = @{
  '.html'        = 'text/html; charset=utf-8'
  '.js'          = 'application/javascript; charset=utf-8'
  '.css'         = 'text/css; charset=utf-8'
  '.json'        = 'application/json; charset=utf-8'
  '.webmanifest' = 'application/manifest+json; charset=utf-8'
  '.svg'         = 'image/svg+xml'
  '.png'         = 'image/png'
  '.jpg'         = 'image/jpeg'
  '.ico'         = 'image/x-icon'
  '.woff2'       = 'font/woff2'
}

function Get-LocalLanIP {
  try {
    $addr = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction Stop |
      Where-Object { $_.IPAddress -notlike '169.254*' -and $_.IPAddress -ne '127.0.0.1' -and $_.PrefixOrigin -ne 'WellKnown' } |
      Select-Object -First 1 -ExpandProperty IPAddress
    return $addr
  } catch { return $null }
}

$listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Any, $Port)
try {
  $listener.Start(200)
} catch {
  Write-Host "Nie udalo sie uruchomic serwera na porcie $Port. Sprobuj innego portu: -Port 8888" -ForegroundColor Red
  exit 1
}

$lanIp = Get-LocalLanIP
Write-Host "BioKonkurs dziala:" -ForegroundColor Green
Write-Host "  Na tym komputerze:                 http://localhost:$Port/" -ForegroundColor Green
if ($lanIp) {
  Write-Host "  Dla telefonu (ta sama siec Wi-Fi): http://${lanIp}:$Port/" -ForegroundColor Cyan
} else {
  Write-Host "  (nie wykryto adresu sieci lokalnej - polaczenie z telefonu moze byc niedostepne)" -ForegroundColor Yellow
}
Write-Host "Zatrzymanie: Ctrl+C w tym oknie." -ForegroundColor Yellow

try { Start-Process "http://localhost:$Port/" } catch {}

# --- Obsluga pojedynczego polaczenia (uruchamiana rownolegle w watkach z puli) ---
$handleClientScript = {
  param($client, $root, $mimeMap)

  function Send-HttpResponse($stream, [int]$statusCode, [string]$statusText, [byte[]]$bodyBytes, [string]$contentType) {
    $headerText = "HTTP/1.1 $statusCode $statusText`r`n" +
      "Content-Type: $contentType`r`n" +
      "Content-Length: $($bodyBytes.Length)`r`n" +
      "Cache-Control: no-store, no-cache, must-revalidate`r`n" +
      "Connection: close`r`n" +
      "Access-Control-Allow-Origin: *`r`n" +
      "Service-Worker-Allowed: /`r`n" +
      "`r`n"
    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headerText)
    $stream.Write($headerBytes, 0, $headerBytes.Length)
    if ($bodyBytes.Length -gt 0) { $stream.Write($bodyBytes, 0, $bodyBytes.Length) }
    $stream.Flush()
  }

  try {
    $client.NoDelay = $true
    $client.ReceiveTimeout = 5000
    $client.SendTimeout = 5000
    $stream = $client.GetStream()

    $buffer = New-Object System.Collections.Generic.List[byte]
    $readByte = New-Object byte[] 1
    $headerEnd = $false
    $maxBytes = 65536
    while (-not $headerEnd -and $buffer.Count -lt $maxBytes) {
      $n = $stream.Read($readByte, 0, 1)
      if ($n -eq 0) { break }
      $buffer.Add($readByte[0])
      if ($buffer.Count -ge 4) {
        $c = $buffer.Count
        if ($buffer[$c-4] -eq 13 -and $buffer[$c-3] -eq 10 -and $buffer[$c-2] -eq 13 -and $buffer[$c-1] -eq 10) {
          $headerEnd = $true
        }
      }
    }

    $requestText = [System.Text.Encoding]::ASCII.GetString($buffer.ToArray())
    $requestLine = ($requestText -split "`r`n")[0]
    $parts = $requestLine -split ' '

    if ($parts.Length -ge 2) {
      $method = $parts[0]
      $rawPath = $parts[1]
      $relPath = [System.Uri]::UnescapeDataString($rawPath.Split('?')[0])
      if ($relPath -eq '/') { $relPath = '/index.html' }
      $filePath = Join-Path $root ($relPath.TrimStart('/'))
      $filePath = [System.IO.Path]::GetFullPath($filePath)

      if (-not $filePath.StartsWith($root)) {
        $body = [System.Text.Encoding]::UTF8.GetBytes('403 Forbidden')
        Send-HttpResponse $stream 403 'Forbidden' $body 'text/plain; charset=utf-8'
      } elseif (Test-Path $filePath -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        $contentType = $mimeMap[$ext]
        if (-not $contentType) { $contentType = 'application/octet-stream' }
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        if ($method -eq 'HEAD') { $bytes = New-Object byte[] 0 }
        Send-HttpResponse $stream 200 'OK' $bytes $contentType
      } else {
        $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $relPath")
        Send-HttpResponse $stream 404 'Not Found' $body 'text/plain; charset=utf-8'
      }
    }
  } catch {
    # ignoruj pojedyncze bledy polaczenia (np. przegladarka zamknela socket wczesniej)
  } finally {
    try {
      # Graceful shutdown: upewnij sie, ze wszystkie dane dotarly do klienta zanim zerwiemy polaczenie
      # (bez tego niektore mechanizmy przegladarki, np. rejestracja Service Workera, moga uznac
      # odpowiedz za obcieta i zglosic blad, mimo ze dane zostaly wyslane).
      if ($client.Connected) {
        $client.Client.Shutdown([System.Net.Sockets.SocketShutdown]::Send)
        $drainBuf = New-Object byte[] 256
        $client.Client.ReceiveTimeout = 200
        try { while ($client.Client.Receive($drainBuf) -gt 0) {} } catch {}
      }
    } catch {}
    $client.Close()
  }
}

$runspacePool = [runspacefactory]::CreateRunspacePool(1, 32)
$runspacePool.Open()
$pending = New-Object System.Collections.Generic.List[object]

while ($true) {
  try {
    $client = $listener.AcceptTcpClient()
  } catch {
    break
  }

  $ps = [powershell]::Create()
  $ps.RunspacePool = $runspacePool
  [void]$ps.AddScript($handleClientScript).AddArgument($client).AddArgument($root).AddArgument($mimeMap)
  $handle = $ps.BeginInvoke()
  $pending.Add([pscustomobject]@{ PS = $ps; Handle = $handle })

  # sprzataj zakonczone zadania, zeby lista nie rosla w nieskonczonosc
  for ($i = $pending.Count - 1; $i -ge 0; $i--) {
    if ($pending[$i].Handle.IsCompleted) {
      try { $pending[$i].PS.EndInvoke($pending[$i].Handle) } catch {}
      $pending[$i].PS.Dispose()
      $pending.RemoveAt($i)
    }
  }
}
