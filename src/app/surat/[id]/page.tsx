"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";

import { fetchDetailSurat } from "@/lib/api";

import ContainerSurat from "@/components/ContainerSurat";
import ContainerSuratLoading from "@/components/ContainerSuratLoading";

import { Surat } from "@/types/ayatType";

export default function DetailSuratPage() {
  const params = useParams();
  const id = params?.id as string | undefined;

  const [detailSurat, setDetailSurat] = useState({} as Surat);

  useEffect(() => {
    if (id) {
      fetchSuratDetail(id);
    }
  }, [id]);

  const fetchSuratDetail = async (i: string) => {
    try {
      const res = await fetchDetailSurat(i);
      console.log(res);

      if (res.data) {
        setDetailSurat(res.data);
      }
    } catch (e) {
      console.error(e);
      notFound(); // return notFound() should not be inside catch
    }
  };

  if (!detailSurat.nomor) {
    return <ContainerSuratLoading />;
  }

  return <ContainerSurat detailSurat={detailSurat} />;
}
