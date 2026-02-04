// Normaliza el _routes.json generado para reemplazar entradas largas por wildcards
// Soporta varios caminos donde Nitro/adapter puede haber escrito el archivo.
const fs = require('fs');
const path = require('path');

const candidates = [
  'functions/_routes.json',
  '_routes.json',
  '.output/functions/_routes.json',
  '.output/server/_routes.json',
  '.output/public/_routes.json'
];

function normalizeFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  const content = fs.readFileSync(filePath, 'utf8');
  let data;
  try {
    data = JSON.parse(content);
  } catch (e) {
    console.error('No es JSON válido:', filePath, e.message);
    return false;
  }

  if (!Array.isArray(data.exclude)) {
    console.log('No contiene "exclude" o no es array en', filePath);
    return false;
  }

  const newExcludes = new Set();

  for (const entry of data.exclude) {
    if (typeof entry !== 'string') continue;
    // Si la entrada ya es corta, mantenla
    if (entry.length <= 100) {
      newExcludes.add(entry);
      continue;
    }
    // Si ya es wildcard, mantenla
    if (entry.endsWith('/*') || entry.includes('*')) {
      newExcludes.add(entry);
      continue;
    }
    // Reemplazar por dirname + '/*' (por ejemplo '/blogs-img/*')
    // Usamos path.posix para forzar '/' independientemente del OS
    const dir = path.posix.dirname(entry);
    // Evitar '.' o '' como dirname
    const safeDir = (dir === '.' || dir === '') ? '/' : dir;
    // Si dirname es '/', entonces usa '/*' (pero eso es demasiado genérico)
    if (safeDir === '/') {
      // Si el entry es demasiado largo y no tiene dirname útil, reducirlo a '/assets/*'
      newExcludes.add('/assets/*');
    } else {
      newExcludes.add(safeDir.endsWith('/*') ? safeDir : `${safeDir}/*`);
    }
  }

  // Convertimos a array y ordenamos para consistencia
  data.exclude = Array.from(newExcludes).sort();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log('Normalized routes file:', filePath);
  return true;
}

let found = false;
for (const p of candidates) {
  if (normalizeFile(p)) found = true;
}

if (!found) {
  console.warn('No se encontró ningún _routes.json en las rutas esperadas. Ejecuta build primero y verifica la ubicación.');
  process.exit(0);
}