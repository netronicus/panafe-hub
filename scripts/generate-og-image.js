import { Resvg } from '@resvg/resvg-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#006847"/>
      <stop offset="100%" stop-color="#004d35"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Decorative Mexico flag stripe at top -->
  <rect x="0" y="0" width="1200" height="8" fill="#006847"/>
  <rect x="0" y="8" width="1200" height="8" fill="#ffffff"/>
  <rect x="0" y="16" width="1200" height="8" fill="#CE1126"/>

  <!-- Shield icon centered -->
  <g transform="translate(600, 220)">
    <path d="M0,-60 C0,-60 50,-40 50,10 C50,50 0,80 0,80 C0,80 -50,50 -50,10 C-50,-40 0,-60 0,-60 Z" fill="#ffffff" opacity="0.15"/>
    <path d="M0,-50 C0,-50 42,-33 42,8 C42,43 0,70 0,70 C0,70 -42,43 -42,8 C-42,-33 0,-50 0,-50 Z" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.9"/>
    <path d="M-15,-10 L0,5 L15,-20" fill="none" stroke="#B5A642" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Main title -->
  <text x="600" y="360" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="72" font-weight="700" fill="#ffffff" letter-spacing="-1">
    PANAFE Hub
  </text>

  <!-- Subtitle -->
  <text x="600" y="420" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="32" font-weight="500" fill="#b8e6d3">
    Registro de Líneas Móviles México 2026
  </text>

  <!-- Divider line -->
  <line x1="450" y1="450" x2="750" y2="450" stroke="#B5A642" stroke-width="2" opacity="0.6"/>

  <!-- Bottom tagline -->
  <text x="600" y="500" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="20" font-weight="400" fill="#8ccfb8">
    Enlaces oficiales • Checklist de documentos • Seguimiento gratuito
  </text>

  <!-- URL at bottom -->
  <text x="600" y="580" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="18" font-weight="400" fill="#6bb89d">
    panafe-hub.github.io
  </text>
</svg>`

const resvg = new Resvg(svg, {
  fitTo: {
    mode: 'width',
    value: 1200,
  },
})

const pngData = resvg.render()
const pngBuffer = pngData.asPng()

const outPath = path.resolve(__dirname, '../public/og-image.png')
fs.writeFileSync(outPath, pngBuffer)

console.log(`OG image generated: ${outPath} (${pngBuffer.length} bytes)`)
