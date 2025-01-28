import { TOKEN } from "@/util/constants";
import { MovieType } from "@/util/Movietype";
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
    <div className="w-[80%] flex justify-center">
      <div className="flex flex-wrap justify-between w-[79.813rem]  ">
        <h2 className="text-2xl font-semibold ">Popular</h2>
        <h4 className="">See more</h4>
        <div className="flex flex-wrap justify-between w-[79.813rem]">
          {data.results.slice(0, 10).map((movie: MovieType) => {
            return (
              <div className="border-[#8b8b8b37] border-[1px] w-[14rem] h-[27rem] mt-5 overflow-hidden rounded-lg ">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt=""
                  className="w-[14.rem] h-[21.rem]"
                />
                <div className="w-[14rem] h-[4rem] p-2">
                  <p>⭐{movie?.vote_average}/10</p>
                  <p className="font-normal text-lg ">
                    {movie?.original_title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Upcoming = async () => {
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
    <div className="w-[80%] flex justify-center ">
      <div className="flex flex-wrap justify-between w-[79.813rem]">
        <h2 className="text-2xl font-semibold ">Upcoming</h2>
        <h4 className="">See more</h4>
        <div className="flex flex-wrap justify-between w-[79.813rem]">
          {data.results.slice(0, 10).map((movie: MovieType) => {
            return (
              <div className="border-[#d9d9d935] border-[1px] w-[14rem] h-[27rem] mt-5 overflow-hidden rounded-lg ">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt=""
                  className="w-[14.rem] h-[21.rem]"
                />
                <div className="w-[14rem] h-[4rem] p-2">
                  <p>⭐{movie?.vote_average}/10</p>
                  <p className="font-normal text-lg ">
                    {movie?.original_title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const TopRated = async () => {
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
    <div className="w-[80%] flex justify-center ">
      <div className="flex flex-wrap justify-between w-[79.813rem]">
        <h2 className="text-2xl font-semibold ">Top rated</h2>
        <h4 className="">See more</h4>
        <div className="flex flex-wrap justify-between w-[79.813rem]">
          {data.results.slice(0, 10).map((movie: MovieType) => {
            return (
              <div className="border-[#d9d9d935] border-[1px] w-[14rem] h-[27rem] mt-5 overflow-hidden rounded-lg ">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt=""
                  className="w-[14.rem] h-[21.rem]"
                />
                <div className="w-[14rem] h-[4rem] p-2">
                  <p>⭐{movie?.vote_average}/10</p>
                  <p className="font-normal text-lg ">
                    {movie?.original_title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
