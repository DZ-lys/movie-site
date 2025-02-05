"use client";

import { Header } from "@/components/Header";
import { getData } from "@/util/Data";
import { Button } from "@/components/ui/button";

const GenrePage = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <h1>Search filter</h1>
          <div>
            <h2>Genres</h2>
            <h6>see lists of movies by genre</h6>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default GenrePage;
