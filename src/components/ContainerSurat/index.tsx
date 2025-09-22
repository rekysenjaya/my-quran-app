"use client";

import { useCallback, useState } from 'react';

import { ShowTextProvider } from '@/context/ShowTextContext'

import ControllListAyat from '@/components/ControllListAyat';
import ListSnapScroll from '@/components/ListSnapScroll';

import { Surat } from '@/types/ayatType';

const ContainerSurat = ({ detailSurat }: { detailSurat: Surat }) => {
  const [ayat, setAyat] = useState(0)

  const chooseAyat = useCallback((item: number) => {
    setAyat(item)
  }, [])

  return (
    <ShowTextProvider>
      <ControllListAyat listAyat={detailSurat.ayat} handleSelectAyat={chooseAyat} />
      <ListSnapScroll ayatList={detailSurat.ayat} scrollToIndex={ayat} />
    </ShowTextProvider >
  );
}

export default ContainerSurat