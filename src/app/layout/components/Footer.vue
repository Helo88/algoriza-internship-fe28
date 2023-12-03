<template>
  <div
    class="pt-20"
    :class="{
      'bg-zinc-100': isZincBg === true,
      'bg-white': isZincBg === false,
    }"
    v-if="isCheckoutPage === false"
  >
    <div
      class="footer-body mx-[100px] grid grid-cols-1 md:grid-cols-5 text-center md:text-start gap-x-3 mb-[60px]"
    >
      <div class="pt-1">
        <img
          src="../../assets/icons/bxs-plane-alt 1.svg"
          alt="site logo"
          class="inline-block w-6 h-6 mr-1"
        />
        <span class="text-gray-900 text-lg font-medium">my Dream Place</span>
        <p class="text-neutral-600 text-sm font-normal mt-2 w-[80%]">
          Your next goto companion for travel
        </p>
      </div>
      <template v-for="item in footerItems" :key="item.label">
        <FooterSection
          :label="item.label"
          :items="item.items"
          :more="item.more ? item.more : ''"
        />
      </template>
    </div>
    <p
      class="text-right bg-gray-200 py-[10px] px-[200px] text-neutral-600 text-sm font-normal"
    >
      @ my Dream Place 2022
    </p>
  </div>
</template>
<script setup>
// imports
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import FooterSection from "./FooterSection.vue";
/*--------------------------------------------------------------------*/
//variables
const footerItems = [
  {
    label: "Company",
    items: ["About", "jobs", "Newsroom", "Advertising", "Contact us"],
  },
  {
    label: "Explore",
    items: [
      "Australia",
      "New Zealand",
      "United States America (USA)",
      "Greece",
      "Maldaives",
      "Singapore",
    ],
    more: "see more",
  },
  {
    label: "Terms and Policy",
    items: [
      "Privacy Policy",
      "Terms of use",
      "Accessability",
      "Reward System policy",
    ],
  },
  {
    label: "Help",
    items: [
      "Support",
      "Cancel your bookings",
      "Use Coupon",
      "Refund Policies",
      "International Travel Documents",
    ],
  },
];
const route = useRoute();
/*--------------------------------------------------------------------*/
//computed
const isCheckoutPage = computed(() => {
  return ["checkout"].includes(route.name);
});
const isZincBg = computed(() => {
  return ["checkout", "trips","hotel"].includes(route.name);
});
/*--------------------------------------------------------------------*/
//methods

/*--------------------------------------------------------------------*/
//watchers

/*--------------------------------------------------------------------*/
//definations

/*--------------------------------------------------------------------*/
</script>

<style scoped></style>
