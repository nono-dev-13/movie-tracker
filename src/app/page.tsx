import { getPopularMovies } from "@/lib/tmdb";
import { MovieList } from "@/components/MovieList";

export default async function Home() {
  const popularMovies = await getPopularMovies();

  return (
    <div className="container mx-auto px-4 md:px-0">
      <h1 className="py-6">Liste des films populaires</h1>
      <MovieList movies={popularMovies.results} />
    </div>
  );
}
