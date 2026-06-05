import { Resvg } from '@resvg/resvg-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="40" fill="#006847"/>
  <path d="M90,30 C90,30 130,50 130,90 C130,125 90,150 90,150 C90,150 50,125 50,90 C50,50 90,30 90,30 Z" fill="#ffffff" opacity="0.9"/>
  <path d="M90,42 C90,42 120,58 120,90 C120,118 90,138 90,138 C90,138 60,118 60,90 C60,58 90,42 90,42 Z" fill="#006847"/>
  <path d="M78,82 L90,95 L102,75" fill="none" stroke="#B5A642" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const resvg = new Resvg(svg, {
  fitTo: {
    mode: 'width',
    value: 180,
  },
})

const pngData = resvg.render()
const pngBuffer = pngData.asPng()

const outPath = path.resolve(__dirname, '../public/apple-touch-icon.png')
fs.writeFileSync(outPath, pngBuffer)

console.log(`Apple touch icon generated: ${outPath} (${pngBuffer.length} bytes)`)
