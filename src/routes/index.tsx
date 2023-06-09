import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import BackgroundVideo from "~/components/common/backgroundVideo";
import Billboard from "~/components/common/billboard";
import Billboardone from "~/components/common/billboardone";
import CelebrityCard from "~/components/common/celebrityCard";
import Hero from "~/components/hero";

export default component$(() => {
  return (
    <>
      <Hero />
      {/* <Billboard /> */}
      {/* <Billboardone
        title=""
        img={
          "/images/natalie-portman.jpg"
        }
        heading={"natalie portman"}
      />

      <Billboardone
        title=""
        img={
          "/images/keira-knightley.jpg"
        }
        heading={"keira knightley"}
      />
      <CelebrityCard
      title=""
      img={
        "/images/keira-knightley.jpg"
      }
      heading={"keira knightley"}
      /> */}
      <h1>Body here</h1>
      <BackgroundVideo />
    </>
  );
});

export const head: DocumentHead = {
  title: "Art App",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
