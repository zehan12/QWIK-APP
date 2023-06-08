import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Billboard from '~/components/common/billboard';
import Billboardone from '~/components/common/billboardone';
import Hero from '~/components/hero';

export default component$(() => {
  return (
    <>
      <Hero />
        <Billboard />
        <Billboardone
          title=""
          img={"https://couragetheactor.files.wordpress.com/2018/11/large-screenshot2.jpg"}
          heading={"v for vagina"}
         />
      <h1>Body here</h1>      
    </>
  );
});

export const head: DocumentHead = {
  title: 'Art App',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};

