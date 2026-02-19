const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.BASE_URL;

export async function getPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Impossible de récupérer les films populaires");
  }

  return res.json();
}
