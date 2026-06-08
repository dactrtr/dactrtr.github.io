// Fetches dactrtr's GitHub contribution data and saves it as assets/gh-contribs.json.
// Run via GitHub Action daily; uses the undocumented GitHub contributions HTML endpoint
// (no token required — public profile data only).
const https = require('https');
const fs    = require('fs');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; contributions-fetcher/1.0)',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'text/html'
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return get(res.headers.location).then(resolve).catch(reject);
      }
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    }).on('error', reject);
  });
}

async function main() {
  console.log('Fetching contributions…');
  const html = await get('https://github.com/users/dactrtr/contributions');

  const cells = [];
  const tagRe = /<td[^>]+>/g;
  let m;
  while ((m = tagRe.exec(html)) !== null) {
    const tag  = m[0];
    const dateM  = tag.match(/data-date="([^"]+)"/);
    const levelM = tag.match(/data-level="([^"]+)"/);
    if (dateM && levelM) {
      cells.push({ date: dateM[1], level: parseInt(levelM[1], 10) });
    }
  }

  if (!cells.length) throw new Error('No contribution cells found — GitHub HTML may have changed.');
  cells.sort((a, b) => a.date.localeCompare(b.date));
  console.log(`Parsed ${cells.length} days`);

  // Pad start to the nearest Sunday so the grid columns align correctly
  const firstDow = new Date(cells[0].date + 'T12:00:00Z').getUTCDay();
  const padded   = Array(firstDow).fill({ date: null, level: -1 }).concat(cells);

  // Group into week columns of 7
  const weeks = [];
  for (let i = 0; i < padded.length; i += 7) {
    const week = padded.slice(i, i + 7);
    while (week.length < 7) week.push({ date: null, level: -1 });
    weeks.push(week.map(d => d.level));
  }

  const out = {
    generated: new Date().toISOString().split('T')[0],
    total: cells.reduce((s, c) => s + c.level, 0),
    weeks
  };

  fs.writeFileSync('assets/gh-contribs.json', JSON.stringify(out));
  console.log(`Saved ${weeks.length} weeks → assets/gh-contribs.json`);
}

main().catch(e => { console.error(e.message); process.exit(1); });
