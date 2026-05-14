Set-Location "C:\Users\anesd\Desktop\webprishtina\BORNE"
Write-Host "=== BORNE Setup Script ===" -ForegroundColor Cyan
Write-Host "Directory: $(Get-Location)"
Write-Host "Node: $(node --version)"
Write-Host "NPM: $(npm --version)"
Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install --legacy-peer-deps
Write-Host "Install exit code: $LASTEXITCODE" -ForegroundColor Green
Write-Host ""
Write-Host "Checking node_modules..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    $count = (Get-ChildItem node_modules -Directory).Count
    Write-Host "node_modules has $count packages" -ForegroundColor Green
} else {
    Write-Host "ERROR: node_modules not found!" -ForegroundColor Red
}
Write-Host "DONE"
