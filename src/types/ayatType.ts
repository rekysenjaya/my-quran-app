export interface AudioUrls {
    "01": string;
    "02": string;
    "03": string;
    "04": string;
    "05": string;
}

export interface Ayat {
    nomorAyat: number;
    teksArab: string;
    teksLatin: string;
    teksIndonesia: string;
    audio: AudioUrls;
}

export interface Surat {
    nomor: number;
    nama: string;
    namaLatin: string;
    jumlahAyat: number;
    tempatTurun: string;
    arti: string;
    deskripsi: string;
    audioFull: AudioUrls;
    ayat: Ayat[];
    suratSelanjutnya: {
        nomor: number;
        nama: string;
        namaLatin: string;
        jumlahAyat: number;
    };
    suratSebelumnya: false | {
        nomor: number;
        nama: string;
        namaLatin: string;
        jumlahAyat: number;
    };
}

export interface ApiResponse {
    code: number;
    message: string;
    data: Surat;
}