export async function fetchAllSurat() {
  const res = await fetch("https://equran.id/api/v2/surat");
  const json = await res.json();
  return json.data;
}


export async function fetchDetailSurat(id: string) {
  const res = await fetch(`https://equran.id/api/v2/surat/${id}`);
  const json = await res.json();
  return json.data;
}