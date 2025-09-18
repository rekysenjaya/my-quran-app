
import { fetchListSurat } from "@/lib/api";
import { Surat } from "@/types/suratType";

import Input from "@/components/Input";
import SearchSurat from "@/components/ListSurat";

export default async function Home() {
  let suratList: Surat[] = [];

  try {
    suratList = await fetchListSurat();
  } catch (error) {
    console.error(error);
    return <div>Gagal memuat daftar surat.</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8">
      <h1>Cari Surat Al-Quran</h1>
      <p>Cari berdasarkan nama surat, nomor, atau arti</p>
      <SearchSurat suratList={suratList}/>
    </div>
  );
}
