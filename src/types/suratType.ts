// src/types/surat.ts

export interface Surat {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  audioFull: object;
  deskripsi: string;
  // tambahkan field lain yg ada di response “data” sesuai dokumentasi
}


export interface SuratListResponse {
  code: number;
  message: string;
  data: Surat[];
}
