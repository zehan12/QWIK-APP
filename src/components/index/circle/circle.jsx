import { component$ } from "@builder.io/qwik";
import "../circle/index.css";

export default component$(() => {
  return (
    <>
      <div class="relative">
        <div class="w-[50%] mx-auto">
        <h1>Cirlce</h1>
        <img src="/src/assets/images/circle.png" />
        </div>

        <div class="absolute top-[8.6%] left-[27.9%]">
          <div class="loader">
            <span></span>
          </div>
        </div>
        <div class="absolute w-full h-96 bg-[#030014da] top-[51.5%]">
            <div
              class="w-48 mx-auto mt-5"
              style={{
                color: "#cba3dc",
                border: "1px solid rgba(255,255,255,.08)",
                boxShadow: "inset 0 -7px 11px #a48fff1f",
                padding: "1px 7px",
                borderRadius: "999px",
              }}
            >
              <a class="flex px-2 gap-[9px]">
                <p class="">Research and reading</p>
              </a>
            </div>
            <div class="text-center py-3">
              <span class="fonts !text-5xl">Never lose information</span>
              <p class="fonts !text-lg mt-4">
              Collect your web snippets, Kindle highlights and important links – all in one place.
              <br/>
              Then quickly find them again from any device.
              </p>
            </div>
          
        </div>
      </div>
    </>
  );
});
