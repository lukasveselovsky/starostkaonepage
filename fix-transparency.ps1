Add-Type -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Collections.Generic;
using System.Runtime.InteropServices;

public class ChromaFix
{
    public static void RemoveCheckerboard(string inputPath, string outputPath)
    {
        Bitmap src = new Bitmap(inputPath);
        int w = src.Width, h = src.Height;
        Bitmap dst = new Bitmap(w, h, PixelFormat.Format32bppArgb);

        BitmapData srcData = src.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format24bppRgb);
        BitmapData dstData = dst.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);

        int srcStride = srcData.Stride;
        int dstStride = dstData.Stride;
        byte[] srcBytes = new byte[srcStride * h];
        byte[] dstBytes = new byte[dstStride * h];
        Marshal.Copy(srcData.Scan0, srcBytes, 0, srcBytes.Length);

        Func<int,int,int[]> getPx = (x, y) => {
            int idx = y * srcStride + x * 3;
            return new int[] { srcBytes[idx+2], srcBytes[idx+1], srcBytes[idx] }; // R,G,B
        };

        // background candidate: near-neutral gray/white matching checkerboard tones (~238 or ~254)
        Func<int,int,bool> isBgCandidate = (x, y) => {
            int[] p = getPx(x, y);
            int r = p[0], g = p[1], b = p[2];
            int maxC = Math.Max(r, Math.Max(g, b));
            int minC = Math.Min(r, Math.Min(g, b));
            bool neutral = (maxC - minC) <= 8;
            bool lightRange = (r >= 225 && r <= 255) || (r >= 228 && r <= 246);
            return neutral && r >= 225;
        };

        bool[,] visited = new bool[w, h];
        bool[,] isBackground = new bool[w, h];
        Queue<Point> queue = new Queue<Point>();

        // seed from all border pixels that look like background
        for (int x = 0; x < w; x++)
        {
            EnqueueIfCandidate(x, 0, w, h, visited, queue, isBgCandidate);
            EnqueueIfCandidate(x, h - 1, w, h, visited, queue, isBgCandidate);
        }
        for (int y = 0; y < h; y++)
        {
            EnqueueIfCandidate(0, y, w, h, visited, queue, isBgCandidate);
            EnqueueIfCandidate(w - 1, y, w, h, visited, queue, isBgCandidate);
        }

        int[] dx = { 1, -1, 0, 0 };
        int[] dy = { 0, 0, 1, -1 };

        while (queue.Count > 0)
        {
            Point p = queue.Dequeue();
            if (isBackground[p.X, p.Y]) continue;
            isBackground[p.X, p.Y] = true;
            for (int i = 0; i < 4; i++)
            {
                int nx = p.X + dx[i];
                int ny = p.Y + dy[i];
                if (nx >= 0 && nx < w && ny >= 0 && ny < h && !visited[nx, ny])
                {
                    if (isBgCandidate(nx, ny))
                    {
                        visited[nx, ny] = true;
                        queue.Enqueue(new Point(nx, ny));
                    }
                }
            }
        }

        for (int y = 0; y < h; y++)
        {
            for (int x = 0; x < w; x++)
            {
                int[] p = getPx(x, y);
                int dIdx = y * dstStride + x * 4;
                dstBytes[dIdx + 2] = (byte)p[0]; // R
                dstBytes[dIdx + 1] = (byte)p[1]; // G
                dstBytes[dIdx + 0] = (byte)p[2]; // B
                dstBytes[dIdx + 3] = isBackground[x, y] ? (byte)0 : (byte)255; // A
            }
        }

        Marshal.Copy(dstBytes, 0, dstData.Scan0, dstBytes.Length);
        src.UnlockBits(srcData);
        dst.UnlockBits(dstData);

        dst.Save(outputPath, ImageFormat.Png);
        src.Dispose();
        dst.Dispose();
    }

    private static void EnqueueIfCandidate(int x, int y, int w, int h, bool[,] visited, Queue<Point> queue, Func<int,int,bool> isBgCandidate)
    {
        if (!visited[x, y] && isBgCandidate(x, y))
        {
            visited[x, y] = true;
            queue.Enqueue(new Point(x, y));
        }
    }
}
"@ -ReferencedAssemblies System.Drawing

$dir = "C:\Users\vesel\Documents\Projects\starostkaonepage\images"
[ChromaFix]::RemoveCheckerboard("$dir\EVa.png", "$dir\eva-portrait.png")
Write-Output "Done"
Get-Item "$dir\eva-portrait.png" | Select-Object Name, Length
