<script setup>
import { ref } from "vue";

import servicesData from "@/database/servicesData.json";

import BaseButton from "@/components/base/BaseButton.vue";

const cards = ref(servicesData?.services || []);
</script>

<template>
  <section class="">
    <h2 class="text-[4.5rem] font-bold text-center">
      My<span class="text-primary"> Services</span>
    </h2>

    <div class="flex justify-center items-center gap-16 mt-12">
      <div
        v-for="card in cards"
        :key="card.icon"
        class="pt-12 px-8 pb-16 rounded-[2rem] shadow-cards text-center border-t-[.6rem] border-b-[.6rem] border-shadow hover:border-primary transition-all duration-500"
      >
        <i :class="'bx bx-' + card.icon" class="text-[12rem] text-primary"></i>
        <h3 class="text-[3.2rem] font-bold">{{ card.title }}</h3>
        <p class="mt-4 mb-12 text-[1.8rem] text-text">
          {{ card.description }}
        </p>
        <BaseButton
          tag="a"
          theme="primary"
          class="py-4 px-12 text-[1.6rem] font-semibold tracking-wide"
          >{{ card.button }}</BaseButton
        >
      </div>
    </div>
  </section>
</template>

<style></style>
