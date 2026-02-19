import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getPopularMovies } from "@/lib/tmdb";
import { Movie } from "@/types/tmdb";
import Image from "next/image";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  console.log(popularMovies);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularMovies.results.map((movie: Movie) => (
          <Card key={movie.id}>
            <CardHeader>
              <CardTitle>
                <h2>{movie.title}</h2>
              </CardTitle>
              <CardDescription>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                  width={500}
                  height={281}
                  className="w-full h-auto rounded-md mb-2"
                />
                <p>
                  {movie.overview.split(" ").slice(0, 30).join(" ")}
                  {movie.overview.split(" ").length > 30 ? "..." : ""}
                </p>
                <CardAction>Voir les détails</CardAction>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Date de sortie : {movie.release_date}</p>
              <p>Note : {movie.vote_average}</p>
            </CardContent>
            <CardFooter>
              <p>Nombre de votes : {movie.vote_count}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
