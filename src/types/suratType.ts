// src/types/surat.ts

import { AudioUrls } from "./ayatType";

export interface Surat {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: AudioUrls;
}

export interface SuratListResponse {
  code: number;
  message: string;
  data: Surat[];
}
