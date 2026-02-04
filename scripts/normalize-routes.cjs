// Normaliza archivos de rutas generados para Cloudflare Pages
// Ahora incluye búsqueda en 'dist' además de .output y functions.
const fs = require('fs');
const path = require('path');

const candidates = [
  'routes.json',
  '_routes.json',
  'functions/_routes.json',
  '.output/functions/_routes.json',
  '.output/server/_routes.json',
  '.output/public/_routes.json',
  '.output/routes.json',
  '.output/_routes.json',
  'dist/routes.json',
  'dist/_routes.json',
  'dist/functions/_routes.json',
  'dist/.output/routes.json',
  'dist/.output/_routes.json',
  'dist/.output/functions/_routes.json'
];

function safeWildcard(dir) {
  if (!dir || dir === '.' || dir === '/') return '/assets/*';
  return dir.endsWith('/*') ? dir : `${dir}/*`;
}

function normalizeArrayEntries(arr) {
  const out = new Set();
  for (const entry of arr || []) {
    if (typeof entry !== 'string') continue;
    if (entry.length <= 100 || entry.includes('*')) {
      out.add(entry);
      continue;
    }
    const dir = path.posix.dirname(entry);
    out.add(safeWildcard(dir));
  }
  return Array.from(out).sort();
}

function normalizeRoutesArray(routesArr) {
  const out = [];
  for (const item of routesArr || []) {
    if (!item || typeof item !== 'object') continue;
    if (typeof item.pattern === 'string') {
      if (item.pattern.length <= 100 || item.pattern.includes('*')) {
        out.push(item);
      } else {
        const dir = path.posix.dirname(item.pattern);
        const newPattern = safeWildcard(dir);
        const newItem = Object.assign({}, item, { pattern: newPattern });
        out.push(newItem);
      }
    } else {
      out.push(item);
    }
  }
  const seen = new Set();
  return out.filter(i => {
    const s = JSON.stringify(i);
    if (seen.has(s)) return false;
    seen.add(s);
    return true;
  });
}

let foundAny = false;
for (const p of candidates) {
  if (!fs.existsSync(p)) continue;
  foundAny = true;
  let dataRaw;
  try {
    dataRaw = fs.readFileSync(p, 'utf8');
  } catch (e) {
    console.error('No se pudo leer', p, e.message);
    continue;
  }
  let data;
  try {
    data = JSON.parse(dataRaw);
  } catch (e) {
    console.error('JSON inválido en', p, e.message);
    continue;
  }

  let modified = false;

  if (Array.isArray(data.exclude)) {
    const newEx = normalizeArrayEntries(data.exclude);
    if (JSON.stringify(newEx) !== JSON.stringify(data.exclude)) {
      data.exclude = newEx;
      modified = true;
    }
  }

  if (Array.isArray(data.include)) {
    const newIn = normalizeArrayEntries(data.include);
    if (JSON.stringify(newIn) !== JSON.stringify(data.include)) {
      data.include = newIn;
      modified = true;
    }
  }

  if (Array.isArray(data.routes)) {
    const newRoutes = normalizeRoutesArray(data.routes);
    if (JSON.stringify(newRoutes) !== JSON.stringify(data.routes)) {
      data.routes = newRoutes;
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log('Normalized and wrote:', p);
  } else {
    console.log('No changes needed for', p);
  }
}

if (!foundAny) {
  console.warn('No se encontraron archivos de rutas en las rutas esperadas. Ejecuta build primero y verifica ubicación.');
  process.exit(0);
}