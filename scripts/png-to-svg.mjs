import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = resolve(__dirname, '../public/ghcat.png');
const outputPath = resolve(__dirname, '../public/ghcat.svg');

const pngBuffer = readFileSync(inputPath);
const base64 = pngBuffer.toString('base64');

// Read PNG header to get dimensions
const width = pngBuffer.readUInt32BE(16);
const height = pngBuffer.readUInt32BE(20);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <image width="${width}" height="${height}" xlink:href="data:image/png;base64,${base64}"/>
</svg>`;

writeFileSync(outputPath, svg);
console.log(`Converted ${inputPath} -> ${outputPath}`);
console.log(`Dimensions: ${width}x${height}`);
console.log(`SVG size: ${(svg.length / 1024).toFixed(1)} KB`);
