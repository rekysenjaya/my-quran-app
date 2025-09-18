"use client";

import Switch from "../Switch";
import { useShowText } from "@/context/ShowTextContext";

const ControllListAyat = () => {
  const { showLatin, toggleShowLatin, showArti, toggleShowArti } = useShowText();

  return (
    <div className="flex gap-4 pt-4">
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