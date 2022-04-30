<script setup>
import { RouterView } from "vue-router";
import StarsIcon from "./components/icons/StarsIcon.vue";
</script>

<template>
  <header
    class="shadow-2xl shadow-black grid grid-flow-col grid-cols-3 content-between auto-rows-[7rem] md:auto-rows[8rem] lg:auto-rows-[9rem] 2xl:auto-rows-[10rem]"
  >
    <div></div>
    <div class="flex items-center justify-center">
      <h1
        class="text-center font-advendPro font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-[#737373]"
      >
        MNTN
      </h1>
    </div>
    <div class="justify-self-end scale-50 md:scale-75 xl:scale-100">
      <StarsIcon />
    </div>
  </header>
  <main class="bg-[#F9F3F2] relative overflow-hidden min-h-screen">
    <StarsIcon class="absolute top-0 svg-hor" />
    <div class="semi-circle -top-52 xl:-top-32 md:-top-36"></div>
    <RouterView />
  </main>
</template>

<style>
.svg-hor {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}
.semi-circle {
  position: absolute;
  z-index: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 500px;
  border-radius: 100%;
  background: linear-gradient(178.18deg, #e8d0a8 -13.56%, #af988a 158.3%);
}

@media screen and (max-width: 768px) {
  .semi-circle {
    display: none;
  }
}
</style>
