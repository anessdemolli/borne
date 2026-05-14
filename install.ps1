$ErrorActionPreference = "Continue"
Set-Location "C:\Users\anesd\Desktop\webprishtina\BORNE"

$node = "C:\Program Files\nodejs\node.exe"
$npmCli = "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js"

Write-Host "Working dir: $(Get-Location)"
Write-Host "Node: $( & $node --version )"

# Force dev dependencies to install
$env:NODE_ENV = "development"

Write-Host "`n--- Installing ALL dependencies (including dev) ---"
& $node $npmCli install --legacy-peer-deps --include=dev 2>&1 | Tee-Object -FilePath "install_log.txt"

Write-Host "`n--- node_modules packages ---"
$count = (Get-ChildItem node_modules -Directory -ErrorAction SilentlyContinue).Count
Write-Host "Total: $count"

# Check key packages
foreach ($pkg in @("tailwindcss", "typescript", "react-icons", "framer-motion")) {
    if (Test-Path "node_modules\$pkg") {
        Write-Host "  [OK] $pkg"
    } else {
        Write-Host "  [MISSING] $pkg"
    }
}

Write-Host "`n--- Copying images ---"
if (!(Test-Path "public\img")) { New-Item -ItemType Directory -Path "public\img" -Force | Out-Null }
Copy-Item -Path "img\*" -Destination "public\img\" -Force -Recurse
Write-Host "Images copied: $(Get-ChildItem public\img | Measure-Object | Select-Object -ExpandProperty Count) files"

Write-Host "`n--- Checking components ---"
Get-ChildItem components -ErrorAction SilentlyContinue | ForEach-Object { Write-Host "  $($_.Name)" }

Write-Host "`n--- Running build ---"
& $node $npmCli run build 2>&1 | Tee-Object -FilePath "build_log.txt"
Write-Host "Build exit: $LASTEXITCODE"
