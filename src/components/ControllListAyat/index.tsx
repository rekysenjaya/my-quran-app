"use client";

import Switch from "../Switch";
import SlideNumber from "../SlideNumber";

import { useShowText } from "@/context/ShowTextContext";

import { Ayat } from "@/types/ayatType";


const ControllListAyat = ({ handleSelectAyat, listAyat }: { handleSelectAyat: (a: number) => void, listAyat: Ayat[] }) => {
  const { showLatin, toggleShowLatin, showArti, toggleShowArti } = useShowText();

  return (
    <>
      <SlideNumber end={listAyat.length} onSelect={(item) => handleSelectAyat(item as number)} />
      <div className="flex gap-4 items-center">
        <div className="flex gap-1">
          <div>Transliterasi</div>
          <Switch isChecked={showLatin} onChange={toggleShowLatin} />
        </div>
        <div className="flex gap-1">
          <div>Terjemahan</div>
          <Switch isChecked={showArti} onChange={toggleShowArti} />
        </div>
      </div>
    </>
  );
};

export default ControllListAyat