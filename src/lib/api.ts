import { SuratListResponse, Surat } from '@/types/suratType';

export const fetchListSurat = async (): Promise<Surat[]> => {
  const res = await fetch('https://equran.id/api/v2/surat');

  if (!res.ok) {
    throw new Error('Gagal mengambil data surat');
  }

  const json: SuratListResponse = await res.json();
  return json.data;
};