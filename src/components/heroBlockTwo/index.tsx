import { component$ } from "@builder.io/qwik";
import Stars from "../icons/stars";

export default component$(() => {
  return (
    <>
      <section>
        <div class="relative pb-[250px] mb-10">
          <video
            class="object-cover sm:h-full h-[400px] sm:mx-auto"
            preload="false"
            muted
            autoPlay
            loop
            src="../../../src/assets/videos/black-hole.webm"
          ></video>
          <div class="absolute top-10 w-full">
            <div
              class="w-[26%] mx-auto"
              style={{
                color: "#cba3dc",
                border: "1px solid rgba(255,255,255,.08)",
                boxShadow: "inset 0 -7px 11px #a48fff1f",
                padding: "10px 12px",
                borderRadius: "999px",
              }}
            >
              <a class="flex px-2 gap-[9px]">
                <Stars />
                <p class="">New: Frontend Framwork with Resumability</p>
              </a>
            </div>

            <div class="text-center flex flex-col py-5">
              <span class="fonts">Think Better</span>
              <span class="fonts">With Qwik</span>
              <p class="fonts !text-lg mt-4">
                Never miss a note, idea or connection.
              </p>
            </div>

            <div
              style={{
                background: " rgba(255,255,255,.01)",
                borderRadius: "24px",
                boxShadow: "inset 0 0 0 8px #ffffff08",
                padding: "8px",
                height: "100%",
              }}
              class="mx-auto w-[26%] mt-[9.5%]"
            >
              <picture>
                <img
                  alt="calendar"
                  style={{
                    color: "#cba3dc",
                    border: "1px solid rgba(255,255,255,.08)",
                    boxShadow: "inset 0 -7px 11px #a48fff1f",
                    padding: "15px 12px",
                    borderRadius: "10px",
                    backdropFilter: "blur(15px)",
                  }}
                  src="/src/assets/images/calendar.png"
                />
              </picture>
            </div>

           
          </div>
        </div>
      </section>
    </>
  );
});
