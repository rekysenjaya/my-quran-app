import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

type Surat = {
  nomor: number;
  nama: string;
  namaLatin: string;
};

type ApiResponse = {
  data: Surat[];
};

async function generateSitemap() {
  const res = await fetch('https://equran.id/api/v2/surat');
  const json: ApiResponse = await res.json();
  const suratList = json.data;

  const staticPages = ['', '/tentang', '/kontak'];

  const staticUrls = staticPages
    .map((page) => `<url><loc>${BASE_URL}${page}</loc></url>`)
    .join('');

  const dynamicUrls = suratList
    .map(
      (surat) =>
        `<url><loc>${BASE_URL}/surah/${surat.nomor}</loc></url>`
    )
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}
  ${dynamicUrls}
</urlset>`;

  const filePath = path.resolve(__dirname, '../public/sitemap.xml');
  await fs.promises.writeFile(filePath, sitemap);

  console.log('✅ Sitemap berhasil digenerate!');
}

generateSitemap().catch((err) => {
  console.error('❌ Gagal generate sitemap:', err);
});
