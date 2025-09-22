"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

import ImageMode from "../ImageMode";
import Input from "../Input";

import { Surat } from "@/types/suratType";

interface SearchSuratProps {
  suratList: Surat[];
}

export default function SearchSurat({ suratList }: SearchSuratProps) {
  const [query, setQuery] = useState("");

  // Filter suratList berdasarkan query (namaLatin, nomor, arti)
  const filteredSurat = useMemo(() => {
    if (!query) return suratList;

    return suratList.filter((surat) => {
      const q = query.toLowerCase();
      return (
        surat.namaLatin.toLowerCase().includes(q) ||
        surat.nomor.toString().includes(q) ||
        surat.arti.toLowerCase().includes(q)
      );
    });
  }, [query, suratList]);

  return (
    <>
      <Input
        type="text"
        placeholder="Cari surat..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredSurat.map((surat) => (
          <Link key={surat.nomor} rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}/surat/${surat.nomor}`} className="transition-transform duration-300 transform hover:scale-105 border p-4 rounded-3xl shadow-sm cursor-pointer">
            <div className="flex gap-4">
              <span className="border-pink-400 border-2 rounded-full h-[40px] min-w-[40px] flex justify-center items-center">
                <div className="border-pink-400 border rounded-full h-[30px] w-[30px] flex justify-center items-center">
                  <h2 className="font-bold text-center leading-none">
                    {surat.nomor}
                  </h2>
                </div>
              </span>
              <div className="w-full">
                <h1>{surat.namaLatin} <span className="font-normal text-[#a1a1aa]">({surat.arti})</span></h1>
                <div className="flex mt-2 gap-1 items-center rounded-lg bg-gray-600 max-w-min py-1 px-2">
                  <ImageMode type="page" className="h-3.5 w-3.5" /><h5 className="text-xs font-medium">{surat.jumlahAyat}</h5>
                </div>
                <div className="flex mt-2 gap-1 items-center">
                  <ImageMode type="location" className="h-3.5 w-3.5" /><h5 className="text-xs font-medium">{surat.tempatTurun}</h5>
                </div>
              </div>
              <h1 className="text-sky-300 text-2xl whitespace-nowrap">{surat.nama}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
