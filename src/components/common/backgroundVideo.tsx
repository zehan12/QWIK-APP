import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div
      style={{border:"1px solid red"}}
        class="relative"
      >
        <video
              style={{border:"1px solid red"}}

          class="object-cover"
          preload="false"
          muted
          autoPlay
          loop
          src="../../../src/assets/videos/black-hole.webm"
        ></video>
        <div class="text-5xl absolute top-0 ">
            hello
        </div>
      </div>
    </>
  );
});
