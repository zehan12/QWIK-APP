import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url("https://couragetheactor.files.wordpress.com/2018/11/large-screenshot2.jpg"), #1c1c1c`,
          height: "500px",
          backgroundSize: "100%, cover",
          backgroundPosition: "center, center",
          width: "100%",
          position: "relative",
        }}
      >
        <div class="absolute mt-[7rem] p-7 mb-[2rem] border-2  border-red-600  min-h-[65%] w-full">
          <h2 class="text-8xl" style={{ color: "white" }}>
            {" "}
            {"V for Vendetta"}{" "}
          </h2>
          <p style={{ color: "white", fontSize: "1rem" }}> {"Desc"}</p>
        </div>
      </div>
    </>
  );
});
