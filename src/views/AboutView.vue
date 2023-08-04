<script setup>
import { ref } from "vue";

import aboutData from "@/database/aboutData.json";

import BaseButton from "@/components/base/BaseButton.vue";

const about = ref(aboutData?.about || []);
</script>
<template>
  <section class="flex justify-center items-center">
    <div class="w-[40vw]">
      <img src="@/assets/images/about.png" alt="img" />
    </div>

    <div class="max-w-[70rem]">
      <h2 class="text-7xl text-left font-bold">
        {{ about[0].title }}<span class="text-primary"> Me</span>
      </h2>
      <h3 class="text-[2rem] font-bold">{{ about[0].subtitle }}</h3>
      <p class="text-[1.6rem] mt-12 mb-8">{{ about[0].description }}</p>
      <BaseButton
        tag="a"
        theme="primary"
        link="https://files.fm/u/c4vhvawyw#/view/vmpps5v9u"
        class="py-[1.2rem] px-[2.8rem] text-[1.6rem] font-semibold"
      >
        {{ about[0].button }}
      </BaseButton>
    </div>
  </section>
</template>

<style></style>
