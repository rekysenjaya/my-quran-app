import Head from 'next/head';

import { fetchListSurat } from "@/lib/api";

import { Surat } from "@/types/suratType";

import SearchSurat from "@/components/ListSurat";

export default async function Home() {
  let suratList: Surat[] = [];

  try {
    suratList = await fetchListSurat();
  } catch (error) {
    console.error(error);
    return <div>Gagal memuat daftar surat.</div>;
  }

  return (
    <>
      <Head>
        <title>Al-Qur&apos;an Online - Baca 114 Surat Lengkap dengan Terjemahan</title>
        <meta name="description" content="Baca dan pelajari Al-Qur&apos;an online. 114 Surat lengkap dengan teks Arab, terjemahan bahasa Indonesia, dan tafsir. Gratis dan tanpa iklan." />
        <meta property="og:title" content="Al-Qur&apos;an Online - 114 Surat Lengkap" />
        <meta property="og:description" content="Aplikasi Al-Qur&apos;an digital dengan 114 surat, terjemahan, dan tafsir." />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Daftar Surat Al-Qur'an",
              "description": "Daftar 114 Surat Al-Qur'an dengan teks Arab, terjemahan, dan tafsir.",
              "hasPart": suratList.map(item => ({
                "@type": "WebPage",
                "name": `${item.namaLatin} - ${item.nama}`,
                "url": `${process.env.NEXT_PUBLIC_BASE_URL}/surat/${item.nomor}`
              }))
            })
          }}
        />
      </Head>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h1>Cari Surat Al-Quran</h1>
        <p>Cari berdasarkan nama surat, nomor, atau arti</p>
        <SearchSurat suratList={suratList} />
      </div>
    </>
  );
}
