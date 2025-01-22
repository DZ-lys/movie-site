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
      <div className="flex flex-wrap justify-between w-[79.813rem]">
        <h2 className="text-2xl font-semibold ">Popular</h2>
        <h4 className="">See more</h4>
        <div className="flex flex-wrap justify-between w-[79.813rem]">
          {data.results.slice(0, 10).map((movie: MovieType) => {
            return (
              <div className="bg-[#f4f4f5] w-[14.375rem] h-[27.438rem] overflow-hidden rounded-lg ">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt=""
                  className="w-[14.358rem] h-[21.25rem]"
                />
                <div className="w-[14.358rem] h-[4.938rem] p-2">
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
