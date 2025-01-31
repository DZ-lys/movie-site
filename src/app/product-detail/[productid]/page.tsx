import React from "react";
import { TOKEN } from "@/util/constants";
import { Header } from "@/components/Header";
import { Star } from "lucide-react";
type zgrlutag = {
  name: string;
};

const ProductPage = async ({
  params: { productid },
}: {
  params: { productid: string };
}) => {
  const details = await fetch(
    `https://api.themoviedb.org/3/movie/${productid}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const productionTeam = await fetch(
    `https://api.themoviedb.org/3/movie/${productid}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const teamates = await productionTeam.json();
  const detail = await details.json();
  const runtimehour = detail?.runtime / 60;
  const runtimeminut = detail?.runtime % 60;
  console.log(teamates);

  return (
    <div>
      <Header />
      <div className="w-[100vw] flex justify-center">
        <div className="w-[1080px] ">
          <div className="w-[100%]">
            <div className="flex justify-between">
              <div>
                <h1 className="text-4xl font-bold ">
                  {detail?.original_title}
                </h1>
                <p className="text-lg font-normal ">
                  {detail?.release_date} -PG- {Math.floor(runtimehour)}h{" "}
                  {runtimeminut}m
                </p>
              </div>
              <div>
                <p className="flex">
                  <Star className=" " />
                  {detail?.vote_average}/10
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-10 ">
            <div
              style={{
                background: `url( https://image.tmdb.org/t/p/original/${detail?.poster_path} )`,
              }}
              className="w-[290px] h-[600px] !bg-center !bg-cover bg-no-repeat aspect-square"
            ></div>
            <div
              style={{
                background: `url( https://image.tmdb.org/t/p/original/${detail?.backdrop_path} )`,
              }}
              className="w-[760px] h-[600px] !bg-center !bg-cover bg-no-repeat aspect-square"
            ></div>
          </div>
          <div className="mt-[30px] flex flex-col gap-5 ">
            <div>
              <div className="flex gap-1">
                {detail?.genres.map((datas: zgrlutag, index: number) => {
                  return (
                    <p
                      key={index}
                      className="px-1 bg-[#e4e4e7] rounded-full text-sm font-bold text-black "
                    >
                      {datas.name}
                    </p>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="text-base font-normal ">{detail?.overview}</p>
            </div>
            <div>
              <div className="flex gap-5">
                <p>Director</p>
                <p>{teamates.crew[1].name}</p>
              </div>
              <div className="flex gap-5">
                <p>Writers</p>
                <div className="flex gap-4">
                  <p>{teamates.crew[10].name}</p>
                  <p>{teamates.crew[11].name}</p>
                  <p>{teamates.crew[12].name}</p>
                </div>
              </div>
              <div className="flex gap-5">
                <p>Stars</p>
                <div className="flex gap-4">
                  <p>{teamates.cast[0].name}</p>
                  <p>{teamates.cast[1].name}</p>
                  <p>{teamates.cast[2].name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
