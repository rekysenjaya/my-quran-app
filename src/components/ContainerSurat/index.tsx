import { ShowTextProvider } from '@/context/ShowTextContext'
import ControllListAyat from '@/components/ControllListAyat';
import ListSnapScroll from '@/components/ListSnapScroll';
import { Surat } from '@/types/ayatType';

export default function ContainerSurat({ detailSurat }: { detailSurat: Surat }) {
  return (
    <ShowTextProvider>
      <div id="header-surat" className='h-screen'>
        <div className='flex flex-col h-full p-4'>
          <div className='border-l-sky-500 border border-l-8 rounded-2xl p-4 mb-4  flex-shrink-0'>
            <h1 className="text-3xl font-bold mb-4">Surat Nomor {detailSurat.nomor}</h1>
            <h2 className="text-xl">{detailSurat.namaLatin} - {detailSurat.arti}</h2>
            <div className="mt-2 text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: detailSurat.deskripsi }} />
            <ControllListAyat />
          </div>
          {/* Tampilkan ayat-ayat jika ada */}
          <ListSnapScroll ayatList={detailSurat.ayat} scrollToIndex={10} />
        </div>
      </div>
    </ShowTextProvider>
  );
}
