param(
  [Parameter(Mandatory = $true)]
  [string]$Title,

  [Parameter(Mandatory = $true)]
  [string]$Summary,

  [Parameter(Mandatory = $true)]
  [ValidateSet('essay', 'criticism', 'literary', 'fragment', 'analysis')]
  [string]$Type,

  [string]$Slug,

  [string]$Date = (Get-Date -Format 'yyyy-MM-dd'),

  [string]$Author,

  [ValidateSet('', 'shortstory')]
  [string]$Mode = '',

  [ValidateSet('', 'article', 'split', 'interrupted')]
  [string]$Layout = '',

  [string]$OpeningImage,

  [string]$OpeningAlt,

  [switch]$Force,

  [switch]$DryRun
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function ConvertTo-AsciiSlug {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Value
  )

  $normalized = $Value.Normalize([Text.NormalizationForm]::FormD)
  $builder = New-Object System.Text.StringBuilder

  foreach ($char in $normalized.ToCharArray()) {
    $category = [Globalization.CharUnicodeInfo]::GetUnicodeCategory($char)
    if ($category -ne [Globalization.UnicodeCategory]::NonSpacingMark) {
      [void]$builder.Append($char)
    }
  }

  $slug = $builder.ToString().ToLowerInvariant()
  $slug = $slug -replace '[^a-z0-9]+', '-'
  $slug = $slug.Trim('-')

  if (-not $slug) {
    throw 'Unable to derive a valid slug. Pass -Slug explicitly.'
  }

  return $slug
}

function Quote-FrontmatterValue {
  param(
    [AllowEmptyString()]
    [string]$Value
  )

  return '"' + ($Value -replace '"', '\"') + '"'
}

function To-TitleCaseTag {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Value
  )

  $textInfo = [Globalization.CultureInfo]::InvariantCulture.TextInfo
  return $textInfo.ToTitleCase($Value)
}

if (-not $Slug) {
  $Slug = ConvertTo-AsciiSlug -Value $Title
}

if ($Layout -and $Mode -ne 'shortstory') {
  throw 'Layout can only be set when -Mode shortstory is used.'
}

if ($Mode -eq 'shortstory' -and -not $Layout) {
  $Layout = 'article'
}

if ($Layout -eq 'split') {
  if (-not $OpeningImage -or -not $OpeningAlt) {
    throw 'Split layout requires both -OpeningImage and -OpeningAlt.'
  }
}

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$templatePath = Join-Path $repoRoot 'static-pages\templates\writing-baseline.md'
$targetDir = Join-Path $repoRoot 'static-pages\writings'
$targetPath = Join-Path $targetDir ($Slug + '.md')

if (-not (Test-Path -LiteralPath $templatePath)) {
  throw "Template not found: $templatePath"
}

if ((Test-Path -LiteralPath $targetPath) -and -not $Force) {
  throw "Target already exists: $targetPath`nUse -Force to overwrite."
}

$content = Get-Content -LiteralPath $templatePath -Raw
$content = $content.Replace('{{TITLE}}', $Title)
$content = $content.Replace('{{DATE}}', $Date)
$content = $content.Replace('{{SUMMARY}}', $Summary)
$content = $content.Replace('{{TYPE}}', $Type)

if ($Author) {
  $content = $content -replace '(?m)^# author: "\{\{AUTHOR\}\}"$', ('author: ' + (Quote-FrontmatterValue -Value $Author))
}
else {
  $content = $content -replace '(?m)^# author: "\{\{AUTHOR\}\}"\r?\n', ''
}

if ($Mode -eq 'shortstory') {
  $content = $content -replace '(?m)^# mode: shortstory$', 'mode: shortstory'
  $content = $content -replace '(?m)^# layout: article$', ('layout: ' + $Layout)

  if ($Layout -eq 'split') {
    $content = $content -replace '(?m)^# opening_image: "\.\./\.\./assets/example-image\.jpg"$', ('opening_image: ' + (Quote-FrontmatterValue -Value $OpeningImage))
    $content = $content -replace '(?m)^# opening_alt: "Describe the image only if the split layout is needed\."$', ('opening_alt: ' + (Quote-FrontmatterValue -Value $OpeningAlt))
  }
  else {
    $content = $content -replace '(?m)^# opening_image: "\.\./\.\./assets/example-image\.jpg"\r?\n', ''
    $content = $content -replace '(?m)^# opening_alt: "Describe the image only if the split layout is needed\."\r?\n', ''
  }
}
else {
  $content = $content -replace '(?m)^# mode: shortstory\r?\n', ''
  $content = $content -replace '(?m)^# layout: article\r?\n', ''
  $content = $content -replace '(?m)^# opening_image: "\.\./\.\./assets/example-image\.jpg"\r?\n', ''
  $content = $content -replace '(?m)^# opening_alt: "Describe the image only if the split layout is needed\."\r?\n', ''
}

$year = if ($Date -match '^\d{4}') { $Matches[0] } else { $Date }
$tag = To-TitleCaseTag -Value $Type
$cardSnippet = @"
<article class="writing-item" role="listitem" data-type="$Type" data-md-path="static-pages/writings/$Slug.md">
  <span class="writing-item-date mono">$year</span>
  <div class="writing-item-main">
    <h3>$Title</h3>
    <p>$Summary</p>
  </div>
  <span class="writing-item-tag">$tag</span>
</article>
"@

if ($DryRun) {
  Write-Output "Dry run only. No file written."
}
else {
  $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($targetPath, $content, $utf8NoBom)
  Write-Output "Created: $targetPath"
}

Write-Output ''
Write-Output 'Add this card to writings.html:'
Write-Output $cardSnippet
