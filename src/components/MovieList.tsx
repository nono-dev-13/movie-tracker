"use client";

import { MovieCard } from "@/components/MovieCard";
import { SearchBar } from "@/components/SearchBar";
import { searchMovies } from "@/lib/tmdb";
import { Movie } from "@/types/tmdb";
import { useState } from "react";

function MovieList({ movies }: { movies: Movie[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>(movies);

  const handleSearch = async (query: string) => {
    const data = await searchMovies(query);
    setQuery(query);
    setResults(data.results);

    if (query.trim() === "") {
      setResults(movies);
      return;
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
export { MovieList };
