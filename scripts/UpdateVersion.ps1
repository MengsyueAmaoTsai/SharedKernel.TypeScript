[CmdletBinding()]
param (
    [Parameter(Mandatory = $true, HelpMessage = "Path to the package.json file to update.")]
    [ValidateNotNullOrEmpty()]
    [string]$PackageJsonPath,

    [Parameter(Mandatory = $true, HelpMessage = "Version string to update in package.json.")]
    [ValidateNotNullOrEmpty()]
    [string]$Version
)

$packageJson = Get-Content -Path $PackageJsonPath -Raw | ConvertFrom-Json
$packageJson.version = $Version
$packageJson | ConvertTo-Json -Depth 10 | Set-Content -Path $PackageJsonPath

Write-Host "Updated package.json version to: $Version" -ForegroundColor Green