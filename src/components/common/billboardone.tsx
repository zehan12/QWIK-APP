import { component$ } from "@builder.io/qwik";

interface BillbordProps {
    title:string,
    img:string,
    heading:string
}

export default component$<BillbordProps>((props) => {
  return (
    <>
      <section 
      class="bg-black"
      >
        <div class="relative aspect-square md:aspect-[3/2] lg:aspect-[25/9]">
          <div class="absolute bottom-0 right-0 top-0 lg:left-1/3">
            <picture>
              <img
                alt={props.title}
                class="h-full w-full max-w-full object-cover"
                src={props.img}
                // srcSet={props.media)}
              />
            </picture>
          </div>
          <div class="absolute bottom-0 left-0 flex flex-col gap-2 bg-gradient-to-t from-black via-black to-transparent p-9 lg:w-2/3 lg:bg-gradient-to-r lg:px-24">
            <h1 class="mt-2 text-4xl text-white lg:text-5xl uppercase">
              {props.heading}
            </h1>
            <div>
              <div class="flex flex-row gap-4">
                {/* <Stars rating={""} /> */}
                <div class="text-sm opacity-80">{`${""} Reviews`}</div>
              </div>
            </div>
            <div>{""}</div>
          </div>
        </div>
      </section>
    </>
  );
});
