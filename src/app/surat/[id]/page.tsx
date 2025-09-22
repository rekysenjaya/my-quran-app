import Head from "next/head";
import { notFound } from "next/navigation";

import { fetchDetailSurat, fetchAllSurat } from "@/lib/api";

import ContainerSurat from "@/components/ContainerSurat";

export async function generateStaticParams() {
  const res = await fetchAllSurat();
  return res.map((surah: any) => ({
    id: surah.nomor.toString(),
  }));
}

export default async function DetailSuratPage({ params }: { params: { id: string } }) {
  const { id } = params;

  let detailSurat;
  try {
    const res = await fetchDetailSurat(id);
    if (!res) return notFound();
    detailSurat = res;
  } catch (e) {
    console.log(e);
    return notFound();
  }

  return (
    <>
      <Head>
        <title>{`Surat ${detailSurat.namaLatin} - Al-Qur'an Online`}</title>
        <meta name="description" content={`Baca Surat ${detailSurat.namaLatin} (${detailSurat.nama}) lengkap dengan terjemahan dan tafsir.`} />
        <meta property="og:title" content={`Surat ${detailSurat.namaLatin} - Al-Qur'an Online`} />
        <meta property="og:description" content={`Surat ${detailSurat.namaLatin} dengan teks Arab, terjemahan bahasa Indonesia, dan tafsir.`} />
        <meta property="og:type" content="article" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": `Surat ${detailSurat.namaLatin}`,
              "description": `Surat ${detailSurat.namaLatin} dalam Al-Qur'an lengkap dengan teks Arab, terjemahan, dan tafsir.`,
              "author": { "@type": "Organization", "name": "AlQuranWeb" },
              "datePublished": "2022-01-01",
            }),
          }}
        />
      </Head>
      <main>
        <ContainerSurat detailSurat={detailSurat} />
      </main>
    </>
  );
}
