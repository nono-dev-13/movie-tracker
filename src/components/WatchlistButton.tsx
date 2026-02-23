"use client";

import { Button } from "@/components/ui/button";

interface Props {
  movie_id: number;
  title: string;
  poster: string;
}

function WatchlistButton({ movie_id, title, poster }: Props) {
  const handleAdd = async () => {
    const res = await fetch("/api/watchlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ movie_id, title, poster }),
    });

    if (res.ok) {
      alert("Film ajouté à la watchlist !");
    } else {
      alert("Erreur lors de l'ajout");
    }
  };

  return (
    <Button variant="default" onClick={handleAdd}>
      Add to Watchlist
    </Button>
  );
}

export { WatchlistButton };
