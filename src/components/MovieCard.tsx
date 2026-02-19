import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Movie } from "@/types/tmdb";
import Image from "next/image";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>{movie.title}</h2>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
            width={500}
            height={281}
            className="w-full h-auto rounded-md mb-2"
          />
          <p className="mb-3">
            {movie.overview.split(" ").slice(0, 30).join(" ")}
            {movie.overview.split(" ").length > 30 ? "..." : ""}
          </p>
          <Button variant="default" size="xs" className="mb-3">
            Voir les détails
          </Button>
        </CardDescription>
        <p>Date de sortie : {movie.release_date}</p>
        <p>Note : {movie.vote_average}</p>
      </CardContent>
      <CardFooter>
        <p>Nombre de votes : {movie.vote_count}</p>
      </CardFooter>
    </Card>
  );
}

export { MovieCard };
