import { component$, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import Billboard from "~/components/common/billboard";
import Billboardone from "~/components/common/billboardone";
import CelebrityCard from "~/components/common/celebrityCard";

const BASE = `https://api.themoviedb.org/3/movie/popular?api_key=3f4ca4f3a9750da53450646ced312397&language=en-US&page=1`;

export const useMovieData = routeLoader$(async (requestEvent) => {
  // This code runs only on the server, after every navigation
  const res = await fetch(BASE);
  const data = await res.json();
  return data;
});

export default component$(() => {
  const resource = useMovieData();
  return (
    <>
      <div class="flex flex-wrap justify-center">
        {resource.value.results.length !== 0 &&
          resource.value.results.map((movie: any) => (
            <div class="transition-scale scale-95 duration-300 ease-in-out hover:scale-100 w-80">
              <picture>
                <img
                  class="max-w-full border-4 border-base-300 object-cover "
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </picture>
            </div>
          ))}
      </div>
      <Billboard />
      <Billboardone
        title=""
        img={"/images/natalie-portman.jpg"}
        heading={"natalie portman"}
      />

      <Billboardone
        title=""
        img={"/images/keira-knightley.jpg"}
        heading={"keira knightley"}
      />
      <CelebrityCard
        title=""
        img={"/images/keira-knightley.jpg"}
        heading={"keira knightley"}
      />
    </>
  );
});
