"use client";

import { memo, useLayoutEffect, useRef } from "react";

import { useShowText } from "@/context/ShowTextContext";

import { Ayat } from "@/types/ayatType";

interface ListSnapScrollProps {
  ayatList: Ayat[];
  scrollToIndex?: number; // default ke 0
}

const CardArti = memo(({ teksIndonesia }: { teksIndonesia: string }) => {
  const { showArti } = useShowText();
  return showArti ? <p className="mt-1">{teksIndonesia}</p> : null;
});
CardArti.displayName = "CardArti";

const CardLatin = memo(({ teksLatin }: { teksLatin: string }) => {
  const { showLatin } = useShowText();
  return showLatin ? (
    <p className="text-gray-500 dark:text-gray-400 italic mt-1">{teksLatin}</p>
  ) : null;
});
CardLatin.displayName = "CardLatin";

const ListCard = memo(({ ayat }: { ayat: Ayat }) => {
  return (
    <div key={ayat.nomorAyat} className="pt-4">
      <div className="flex gap-4">
        <span className="border-pink-400 border-2 rounded-full h-[40px] min-w-[40px] flex justify-center items-center">
          <div className="border-pink-400 border rounded-full h-[30px] w-[30px] flex justify-center items-center">
            <p className="font-bold text-center leading-none">
              {ayat.nomorAyat}
            </p>
          </div>
        </span>
        <div className="w-full">
          <div className="text-3xl font-semibold">{ayat.teksArab}</div>
          <CardLatin teksLatin={ayat.teksLatin} />
          <CardArti teksIndonesia={ayat.teksIndonesia} />
        </div>
      </div>
    </div>
  );
});
ListCard.displayName = "ListCard";


export default function ListSnapScroll({ ayatList, scrollToIndex = 0 }: ListSnapScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Auto scroll to a specific section on mount
  useLayoutEffect(() => {
    const container = containerRef.current;
    const targetSection = sectionRefs.current[scrollToIndex ? scrollToIndex - 1 : 0];
    if (container && targetSection) {
      targetSection.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, [scrollToIndex]);

  return (
    <div
      ref={containerRef}
      className="w-full flex-1 overflow-y-auto border rounded-2xl shadow-inner p-4 pt-0"
      // style={{ height: `calc(100vh - ${headerHeight + 48}px)` }}
    >
      {ayatList.map((ayat, i) => (
        <div
          key={i}
          ref={(el) => {
            sectionRefs.current[i] = el;
          }}
        >
          <ListCard ayat={ayat} />
        </div>
      ))}
    </div>
  );
}
