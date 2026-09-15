Add-Type -AssemblyName System.Drawing

function Resize-Jpeg($inputPath, $outputPath, $maxWidth, $quality) {
  $img = [System.Drawing.Image]::FromFile($inputPath)
  $ratio = [Math]::Min(1.0, [double]$maxWidth / [double]$img.Width)
  $newWidth = [int]($img.Width * $ratio)
  $newHeight = [int]($img.Height * $ratio)
  $bmp = New-Object System.Drawing.Bitmap $newWidth, $newHeight
  $graphics = [System.Drawing.Graphics]::FromImage($bmp)
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)

  $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]$quality)
  $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $bmp.Save($outputPath, $jpegCodec, $encoderParams)

  $graphics.Dispose(); $bmp.Dispose(); $img.Dispose()
}

function Resize-Png($inputPath, $outputPath, $maxWidth) {
  $img = [System.Drawing.Image]::FromFile($inputPath)
  $ratio = [Math]::Min(1.0, [double]$maxWidth / [double]$img.Width)
  $newWidth = [int]($img.Width * $ratio)
  $newHeight = [int]($img.Height * $ratio)
  $bmp = New-Object System.Drawing.Bitmap $newWidth, $newHeight, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bmp)
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)
  $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $graphics.Dispose(); $bmp.Dispose(); $img.Dispose()
}

$dir = "C:\Users\vesel\Documents\Projects\starostkaonepage\images"

Resize-Jpeg "$dir\ll.jpg" "$dir\dedina.jpg" 2200 78
Resize-Png  "$dir\EVa.png" "$dir\eva-portrait.png" 1000

Get-ChildItem "$dir\dedina.jpg", "$dir\eva-portrait.png" | Select-Object Name, Length
