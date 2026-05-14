$out = @()
$out += "=== Node/NPM paths ==="
$out += (where.exe node 2>&1)
$out += (where.exe npm 2>&1)
$out += ""
$out += "=== npm version ==="
$out += (npm --version 2>&1)
$out += ""
$out += "=== node_modules count ==="
if (Test-Path "C:\Users\anesd\Desktop\webprishtina\BORNE\node_modules") {
    $count = (Get-ChildItem "C:\Users\anesd\Desktop\webprishtina\BORNE\node_modules" -Directory).Count
    $out += "Packages: $count"
    $out += (Get-ChildItem "C:\Users\anesd\Desktop\webprishtina\BORNE\node_modules" -Directory | Select-Object -First 20 | ForEach-Object { $_.Name })
} else {
    $out += "node_modules NOT FOUND"
}
$out | Set-Content "C:\Users\anesd\Desktop\webprishtina\BORNE\check_output.txt"
Write-Host "Done - check check_output.txt"
