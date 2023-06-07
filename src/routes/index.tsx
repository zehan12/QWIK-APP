import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '~/components/hero';


export default component$(() => {
  return (
    <>
      <Hero />
      <h1>Body</h1>
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
