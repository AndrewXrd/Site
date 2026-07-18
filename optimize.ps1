Add-Type -AssemblyName System.Drawing
function Resize-Image {
    param([string]$in, [string]$out, [int]$w, [int]$h, [string]$format)
    $img = [System.Drawing.Image]::FromFile($in)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $w, $h)
    $g.Dispose()
    $img.Dispose()
    
    if ($format -eq 'jpg') {
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageDecoders() | Where-Object { $_.FormatID -eq [System.Drawing.Imaging.ImageFormat]::Jpeg.Guid }
        $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]70)
        $bmp.Save($out, $codec, $ep)
    } elseif ($format -eq 'png') {
        $bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    $bmp.Dispose()
}

Resize-Image 'e:\Projects\React\Site\src\assets\Ghost.png' 'e:\Projects\React\Site\src\assets\Ghost-sm.png' 222 173 'png'
Resize-Image 'e:\Projects\React\Site\src\assets\Me.png' 'e:\Projects\React\Site\src\assets\Me-sm.png' 340 600 'png'
Resize-Image 'e:\Projects\React\Site\src\assets\Bg.jpg' 'e:\Projects\React\Site\src\assets\Bg-sm.jpg' 1480 986 'jpg'
