<template>
  <NavBar></NavBar>
  <div class="h-[200px] mx-[100px] text-xl mt-20">
    This page is not found , pleae click
    <span @click="router.push('/')" class="text-blue-500 cursor-pointer"
      >here</span
    >
    to redirect
  </div>
  <FooterVue></FooterVue>
</template>
<script setup>
import NavBar from "../../layout/components/NavBar.vue";
import FooterVue from "../../layout/components/Footer.vue";

import { useRouter } from "vue-router";
const router = useRouter();
</script>
