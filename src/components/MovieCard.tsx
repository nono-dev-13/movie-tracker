import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { buttonVariants } from "@/components/ui/button";

import { Movie } from "@/types/tmdb";
import Image from "next/image";
import Link from "next/link";

function MovieCard({ movie }: { movie: Movie }) {
  const BASE_URL_IMG = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;
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
            src={`${BASE_URL_IMG}${movie.backdrop_path}`}
            alt={movie.title}
            width={500}
            height={281}
            className="w-full h-auto rounded-md mb-2"
          />
          <p className="mb-3 line-clamp-3">{movie.overview}</p>
          <Link
            href={`/movie/${movie.id}`}
            className={
              buttonVariants({ variant: "default", size: "xs" }) + " mb-3"
            }
          >
            Voir les détails
          </Link>
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
