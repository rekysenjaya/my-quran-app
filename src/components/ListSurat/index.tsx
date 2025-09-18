"use client";

import React, { useState, useMemo } from "react";
import { Surat } from "@/types/suratType";
import Input from "../Input";
import Link from "next/link";

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
          <Link key={surat.nomor} href={`/surat/${surat.nomor}`} className="transition-transform duration-300 transform hover:scale-105 border p-4 rounded-3xl shadow-sm cursor-pointer">
            <div className="flex gap-4">
              <span className="border-pink-400 border-2 rounded-full h-[40px] min-w-[40px] flex justify-center items-center">
                <div className="border-pink-400 border rounded-full h-[30px] w-[30px] flex justify-center items-center">
                  <div className="font-bold text-center leading-none">{surat.nomor}</div>
                </div>
              </span>
              <div className="w-full">
                <h3>{surat.namaLatin}<span className="font-normal text-[#a1a1aa]">({surat.arti})</span></h3>
                <span className="text-gray-500 text-sm">{surat.jumlahAyat}</span>
                <span className="text-gray-500 text-sm">{surat.tempatTurun}</span>
              </div>
              <div className="text-sky-300 text-2xl whitespace-nowrap">{surat.nama}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
