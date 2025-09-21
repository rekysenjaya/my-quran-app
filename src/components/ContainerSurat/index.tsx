"use client";

import { useCallback, useState } from 'react';

import { ShowTextProvider } from '@/context/ShowTextContext'

import ControllListAyat from '@/components/ControllListAyat';
import ListSnapScroll from '@/components/ListSnapScroll';

import { Surat } from '@/types/ayatType';
import ImageMode from '../ImageMode';

const ContainerSurat = ({ detailSurat }: { detailSurat: Surat }) => {
  const [show, setShow] = useState(false)
  const [ayat, setAyat] = useState(0)

  const chooseAyat = useCallback((item: number) => {
    setAyat(item)
  }, [])

  return (
    <ShowTextProvider>
      <div className='h-screen'>
        <div className='flex flex-col h-full p-4 gap-4'>
          <div className='border-l-sky-500 border border-l-8 rounded-2xl p-4 flex-shrink-0 max-h-[50vh] overflow-auto'>
            <div className='flex justify-between items-center mb-4'>
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
                  <h3 className='text-gray-500 dark:text-gray-400 font-extralight'>{detailSurat.arti}</h3>
                </div>
                <div onClick={() => setShow(prev => !prev)} className={`h-4 w-4 cursor-pointer  transform transition-transform duration-300 ${show ? '-rotate-180' : ''}`}>
                  <ImageMode type='arrow' />
                </div>
              </div>
              <h1 className="text-sky-300 text-4xl whitespace-nowrap">{detailSurat.nama}</h1>
            </div>
            <div className={`transition-all duration-500 ease-in-out transform ${show ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 max-h-0 overflow-hidden'}`}>
              <div className="mb-4 text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: detailSurat.deskripsi }} />
            </div>
            <div className='flex gap-4'>
              <div className="flex mt-2 gap-1 items-center rounded-lg bg-gray-600 max-w-min py-1 px-2">
                <ImageMode type="page" className="h-3.5 w-3.5" /><div className="text-xs font-medium">{detailSurat.jumlahAyat}</div>
              </div>
              <div className="flex mt-2 gap-1 items-center">
                <ImageMode type="location" className="h-3.5 w-3.5" /><div className="text-xs font-medium">{detailSurat.tempatTurun}</div>
              </div>
            </div>
          </div>
          {/* Tampilkan ayat-ayat jika ada */}
          <ControllListAyat listAyat={detailSurat.ayat} handleSelectAyat={chooseAyat} />
          <ListSnapScroll ayatList={detailSurat.ayat} scrollToIndex={ayat} />
        </div>
      </div >
    </ShowTextProvider >
  );
}

export default ContainerSurat