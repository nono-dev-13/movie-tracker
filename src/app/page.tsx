import { getPopularMovies } from "@/lib/tmdb";
import { Movie } from "@/types/tmdb";
import { MovieCard } from "@/components/MovieCard";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  console.log(popularMovies);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularMovies.results.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
