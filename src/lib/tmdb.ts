import { Movie, TMDBResponse } from "@/types/tmdb";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.BASE_URL;

export async function getPopularMovies(): Promise<TMDBResponse<Movie>> {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Impossible de récupérer les films populaires");
  }

  return res.json();
}

export async function getMovieDetails(movieId: number): Promise<Movie> {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`;
  const res = await fetch(url);

  if (!res.ok) {
    const error = await res.text();
    console.log("Erreur:", error);
    throw new Error("Impossible de récupérer les détails du film");
  }

  return res.json();
}
