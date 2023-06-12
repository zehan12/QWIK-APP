import { component$ } from "@builder.io/qwik";
import Stars from "../icons/stars";
import "./style.css"

export default component$(() => {
  return (
    <>
      <section>
        <div class="relative pb-[250px] mb-[14%]">
          <video
            class="object-cover sm:h-full h-[400px] sm:mx-auto"
            preload="false"
            muted
            autoPlay
            loop
            src="../../../src/assets/videos/black-hole.webm"
          ></video>
          <div class="absolute top-10 w-full">
            <div class="w-[26%] mx-auto">
              <div class="container">
                <a class="flex items-center gap-2">
                  <Stars />
                  <p>New: Frontend Framework with Resumability</p>
                </a>
              </div>
            </div>

            <div class="text-center flex flex-col py-5">
              <span class="font-semibold">Think Better</span>
              <span class="font-semibold">With Qwik</span>
              <p class="font-semibold text-lg mt-4">
                Never miss a note, idea, or connection.
              </p>
            </div>

            <div class="mx-auto w-[90%] mt-[9.5%]">
              <div class="container">
                <picture>
                  <img
                    alt="calendar"
                    class="image"
                    src="/src/assets/images/calendar-lg.png"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
