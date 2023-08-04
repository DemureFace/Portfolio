<script setup>
import { ref } from "vue";

import navigationsData from "@/database/navigationsData.json";

import BaseButton from "@/components/base/BaseButton.vue";

const navigations = ref(navigationsData?.navigations || []);
</script>

<template>
  <header
    class="fixed flex items-center top-0 left-0 w-full z-10"
    :class="{
      'bg-white shadow-header': $route.path !== '/',
    }"
  >
    <BaseButton
      tag="router-link"
      path="home"
      class="mr-auto text-primary font-semibold text-4xl cursor-default"
    >
      Portfolio.
    </BaseButton>

    <nav>
      <BaseButton
        v-for="navigation in navigations"
        :key="navigation"
        tag="router-link"
        :path="navigation.path"
        class="navigation relative mr-14 text-bg font-medium text-3xl leading-[3rem] pb-1"
        :class="{
          'text-gray-700 ': $route.path !== '/',
        }"
        :style="{
          '--after-color': $route.path !== '/' ? 'rgba(0,0,0, .4)' : '#fff',
        }"
      >
        {{ navigation.title }}
      </BaseButton>
    </nav>

    <div
      class="bx bx-moon text-4xl leading-[4rem] text-bg cursor-pointer"
      :class="{
        'text-gray-700': $route.path !== '/',
      }"
    ></div>
  </header>
</template>
