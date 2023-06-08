import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '~/components/hero';


export default component$(() => {
  return (
    <>
      <Hero />
      <div style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url("https://couragetheactor.files.wordpress.com/2018/11/large-screenshot2.jpg"), #1c1c1c`,
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            width: '100%',
            position: 'relative'
        }}>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem', background:"red" }}>
                    <h2 style={{ color: 'white' }}>  {"Movie"} </h2>
                    <p style={{ color: 'white', fontSize: '1rem' }}> {"Desc"}</p>
                </div>
            </div>
        </div>
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
