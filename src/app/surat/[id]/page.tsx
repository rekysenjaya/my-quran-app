import { notFound } from "next/navigation";

import ListSnapScroll from "@/components/ListSnapScroll";
import { fetchDetailSurat } from "@/lib/api"; // asumsi kamu punya API ini
import ControllListAyat from "@/components/ControllListAyat";
import ContainerSurat from "@/components/ContainerSurat";

export default async function DetailSuratPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  let detailSurat;
  try {
    const res = await fetchDetailSurat(id);
    if (res.data) {
      detailSurat = res.data
    }
  } catch (e) {
    return notFound(); // kalau data tidak ditemukan
  }

  return (
    <ContainerSurat detailSurat={detailSurat} />
  );
}