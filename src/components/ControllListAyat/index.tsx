"use client";

import Switch from "../Switch";
import OptionPopup from '../OptionPopup'

import { useShowText } from "@/context/ShowTextContext";

import { Ayat } from "@/types/ayatType";


const ControllListAyat = ({ handleSelectAyat, listAyat }: { handleSelectAyat: (a: number) => void, listAyat: Ayat[] }) => {
  const { showLatin, toggleShowLatin, showArti, toggleShowArti } = useShowText();

  const options = listAyat.map(item => ({ label: `Ayat ${item.nomorAyat}`, value: item.nomorAyat }))

  return (
    <div className="flex gap-4 items-center">
      <OptionPopup placeholder="pilih ayat" options={options} onSelect={(item) => handleSelectAyat(item.value as number)} />
      <div className="flex gap-1">
        <div>Transliterasi</div>
        <Switch isChecked={showLatin} onChange={toggleShowLatin} />
      </div>
      <div className="flex gap-1">
        <div>Terjemahan</div>
        <Switch isChecked={showArti} onChange={toggleShowArti} />
      </div>
    </div>
  );
};

export default ControllListAyat