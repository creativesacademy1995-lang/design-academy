const base = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function strapiGet(path: string) {
  const res = await fetch(`${base}${path}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Strapi error ${res.status}`);
  return res.json();
}
