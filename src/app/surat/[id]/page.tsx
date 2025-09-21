import Head from "next/head";
import { notFound } from "next/navigation";

import { fetchDetailSurat } from "@/lib/api";

import ContainerSurat from "@/components/ContainerSurat";

export default async function DetailSuratPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  let detailSurat;
  try {
    const res = await fetchDetailSurat(id);
    if (res.data) {
      detailSurat = res.data
    }
  } catch (e) {
    console.log(e);
    return notFound(); // kalau data tidak ditemukan
  }

  return (
    <div>
      <Head>
        <title>{`Surat ${detailSurat.name} - Al-Qur'an Online`}</title>
        <meta name="description" content={`Baca Surat ${detailSurat.name} dalam Al-Qur'an online lengkap dengan terjemahan, tajwid, dan tafsir.`} />
        <meta property="og:title" content={`Surat ${detailSurat.name} - Al-Qur'an Online`} />
        <meta property="og:description" content={`Surat ${detailSurat.name} dengan teks Arab, terjemahan Indonesia, dan tafsir.`} />
        <meta property="og:type" content="article" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": `Surat ${detailSurat.name}`,
              "description": `Surat ${detailSurat.name} dalam Al-Qur'an lengkap dengan teks Arab, terjemahan, dan tafsir.`,
              "author": { "@type": "Organization", "name": "AlQuranWeb" },
              "datePublished": "2022-01-01",
            }),
          }}
        />
      </Head>
      <ContainerSurat detailSurat={detailSurat} />
    </div>
  );
}