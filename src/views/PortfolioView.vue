<script setup>
import { ref } from "vue";

import portfolioData from "@/database/portfolioData.json";

import BaseButton from "@/components/base/BaseButton.vue";

const cards = ref(portfolioData?.portfolio || []);
</script>

<template>
  <section class="">
    <h2>Latest<span>Project</span></h2>

    <div class="">
      <div v-for="card in cards" :key="card.img" class="">
        <img :src="card.img" alt="image" />
        <div class="">
          <h2></h2>
          <p></p>
          <BaseButton tag="a"><i class="bx bx-link-alt"></i></BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
