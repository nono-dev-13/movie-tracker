import { getMovieDetails } from "@/lib/tmdb";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movieId = parseInt(id, 10);
  const movie = await getMovieDetails(movieId);

  return (
    <div className="container mx-auto">
      <Link
        href={`/`}
        className={buttonVariants({ variant: "default", size: "xs" }) + " mb-3"}
      >
        retour à la liste
      </Link>
      <h1>Détails du film {movie.id}</h1>
    </div>
  );
}
