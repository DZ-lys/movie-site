import Image from "next/image";
import { TOKEN } from "@/util/constants";
import { MovieType } from "@/util/Movietype";
import { Card } from "./ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Popular = async () => {
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

  return (
    <div className="w-[100vw] flex justify-center  ">
      <div className="flex flex-wrap justify-between w-[79.813rem]">
        <h3 className="text-2xl font-semibold ">Popular</h3>
        <p className="flex">
          see more <ArrowRight />
        </p>
        <div className="flex flex-wrap justify-between w-[79.813rem]">
          {data.results.slice(0, 10).map((movie: MovieType, index: number) => {
            return (
              <Card
                key={index}
                className="w-[14.375rem] h-[26.200rem] overflow-hidden rounded-[8px] mb-6"
              >
                <Link href={`/product-detail/${movie?.id}`}>
                  <div>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                      alt="..loading"
                      className="w-[14.358rem] h-[21.25rem]"
                      width={1000}
                      height={1000}
                    />
                    <div className="w-[14.358rem] h-[4.938rem] p-2">
                      <p>⭐{movie?.vote_average}/10</p>
                      <p>{movie?.original_title}</p>
                    </div>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Upcoming = async () => {
  // Fetch movie
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  return (
    <div className="w-[100vw] flex justify-center  ">
      <div className="flex flex-wrap justify-between w-[79.813rem]">
        <h3 className="text-2xl font-semibold ">Upcoming</h3>
        <p className="flex">
          see more <ArrowRight />
        </p>
        <div className="flex flex-wrap justify-between w-[79.813rem]">
          {data.results.slice(0, 10).map((movie: MovieType, index: number) => {
            return (
              <Card
                key={index}
                className="w-[14.375rem] h-[26.200rem] overflow-hidden rounded-[8px] mb-6"
              >
                <Link href={`/product-detail/${movie?.id}`}>
                  <div>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                      alt="..loading"
                      className="w-[14.358rem] h-[21.25rem]"
                      width={1000}
                      height={1000}
                    />
                    <div className="w-[14.358rem] h-[4.938rem] p-2">
                      <p>⭐{movie?.vote_average}/10</p>
                      <p>{movie?.original_title}</p>
                    </div>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Top_rated = async () => {
  // Fetch movie
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  return (
    <div className="w-[100vw] flex justify-center  ">
      <div className="flex flex-wrap justify-between w-[79.813rem]">
        <h3 className="text-2xl font-semibold ">Top Rated</h3>
        <p className="flex">
          see more <ArrowRight />
        </p>
        <div className="flex flex-wrap justify-between w-[79.813rem]">
          {data.results.slice(0, 10).map((movie: MovieType, index: number) => {
            return (
              <Card
                key={index}
                className="w-[14.375rem] h-[26.200rem] overflow-hidden rounded-[8px] mb-6"
              >
                <Link href={`/product-detail/${movie?.id}`}>
                  <div>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                      alt="..loading"
                      className="w-[14.358rem] h-[21.25rem]"
                      width={1000}
                      height={1000}
                    />
                    <div className="w-[14.358rem] h-[4.938rem] p-2">
                      <p>⭐{movie?.vote_average}/10</p>
                      <p>{movie?.original_title}</p>
                    </div>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
