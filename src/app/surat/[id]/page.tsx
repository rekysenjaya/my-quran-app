import Head from "next/head";
import Link from "next/link";
import { notFound } from "next/navigation";

import { fetchDetailSurat, fetchAllSurat } from "@/lib/api";

import DescriptionSurat from "@/components/DescriptionSurat";
import ContainerSurat from "@/components/ContainerSurat";
import ImageMode from "@/components/ImageMode";

import { Surat } from "@/types/suratType";

export async function generateStaticParams() {
  const res = await fetchAllSurat();
  return res.map((surah: Surat) => ({
    id: surah.nomor.toString(),
  }));
}

export default async function DetailSuratPage({ params }: { params: { id: string } }) {
  const { id } = await params;

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
        <div className='h-screen'>
          <div className='flex flex-col h-full p-4 gap-4'>
            <Link href="/" className='flex gap-2 cursor-pointer'>
              <ImageMode type='back' className='h-4 w-6' />
              <p>Kembali ke Beranda</p>
            </Link>
            <div className='border-l-sky-500 border border-l-8 rounded-2xl p-4 flex-shrink-0 max-h-[50vh] overflow-auto'>
              <div className='flex justify-between items-center mb-1'>
                <div className='flex gap-4 items-center'>
                  <div className="border-pink-400 border-2 rounded-full h-[40px] w-[40px] flex justify-center items-center">
                    <div className="border-pink-400 border rounded-full h-[30px] w-[30px] flex justify-center items-center">
                      <p className="font-bold text-center leading-none">
                        {detailSurat.nomor}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">{detailSurat.namaLatin}</h1>
                  </div>
                </div>
                <h2 className="text-sky-300 text-4xl whitespace-nowrap">{detailSurat.nama}</h2>
              </div>
              <DescriptionSurat detailSurat={detailSurat} />
              <div className='flex gap-4'>
                <div className="flex mt-2 gap-1 items-center rounded-lg bg-gray-600 max-w-min py-1 px-2">
                  <ImageMode type="page" className="h-3.5 w-3.5" /><div className="text-xs font-medium">{detailSurat.jumlahAyat}</div>
                </div>
                <div className="flex mt-2 gap-1 items-center">
                  <ImageMode type="location" className="h-3.5 w-3.5" /><div className="text-xs font-medium">{detailSurat.tempatTurun}</div>
                </div>
              </div>
            </div>
            <ContainerSurat detailSurat={detailSurat} />
          </div>
        </div>
      </main>
    </>
  );
}
