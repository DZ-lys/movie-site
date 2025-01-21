"use client";
import { TOKEN } from "@/util/constants";
import { useEffect, useState } from "react";

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  original_title: string;
};

export default function Home() {
  const [movie, setMovie] = useState<MovieType | undefined>();

  const getMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data?.results) {
      setMovie(data.results[0]);
    }
  };
  useEffect(() => {
    getMovie();
    console.log("getting movie");
  }, []);
  console.log({ movie });

  return (
    <div>
      <div>{movie?.original_title}</div>
      <div className="w-56 h-80 bg-black">
        <img src={movie?.backdrop_path} alt="" />
      </div>
    </div>
  );
}
