import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import BackgroundVideo from "~/components/common/backgroundVideo";
import HeroBlockOne from "~/components/heroBlockOne";
import HeroBlockTwo from "~/components/heroBlockTwo";
import Circle from "~/components/index/circle/circle";
import withRouter from "~/hoc/withRouter";

export default component$(
  withRouter((props: any) => {
    return (
      <>
        <HeroBlockOne />
        <h1>Body here</h1>
        <HeroBlockTwo />
        <h1 class="text-center">{"<<<<<<<<<<<<<<<<<<<<<<+++++++++++++++END+++++++++++>>>>>>>>>>>>>>>>>>>>>"}</h1>
        <Circle />
        <BackgroundVideo />
      </>
    );
  })
);

export const head: DocumentHead = {
  title: "Art App",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
