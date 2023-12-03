<template>
  <div class="mx-0 lg:mx-[100px] relative">
    <main id="homeMain" class="">
      <div
        class="h-[480px] p-1 mt-3 bg-cover bg-blend-overlay bg-black bg-opacity-30 rounded-[10px] relative bg-[url(/images/home/main2.png)]"
      >
        <h3
          class="text-center text-white font-bold text-[32px] mt-[180px] mb-5"
        >
          Enjoy Your Dream Vacation
        </h3>
        <p class="text-center text-white text-xl font-normal w-[60%] mx-auto">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
        <!-- 🛑🛑🛑 style of boxes to be fixed  -->
        <div class="lg:mt-[35px] -mt-[200px]">
          <SearchHotelsForm
            @searchSubmitted="setPageNumber"
            class="mx-[100px]"
          ></SearchHotelsForm>
        </div>
      </div>
    </main>
    <Warning class="mt-[82px] mb-[50px]"></Warning>
    <section class="mb-[60px] text-center lg:text-left ">
      <h2 class="text-neutral-900 text-[28px] font-semibold mb-4">
        Enjoy your dream vacation
      </h2>
      <p class="text-zinc-800 text-base font-normal mb-[30px] w-1/2 mx-auto lg:mx-0">
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and inspiration from us
      </p>
      <ul
        class="flex gap-y-5 md:gap-x-5 flex-wrap justify-center lg:justify-start lg:flex-nowrap lg:mb-5 last:mb-0"
      >
        <li v-for="n in 4" :key="n">
          <img :src="`/images/home/1${n}.png`" alt="landscape image" />
          <div v-if="n - 1 < sec1.length" class="flex flex-col mt-[14px] items-center lg:items-start mb-2 ">
            <span class="text-neutral-900 text-xl font-semibold">{{
              sec1[n - 1].country
            }}</span>
            <span class="text-neutral-900 text-sm font-normal">{{
              sec1[n - 1].properties
            }}</span>
          </div>
        </li>
      </ul>
    </section>

    <section class="mb-[60px] text-center lg:text-left">
      <h2 class="text-neutral-900 text-[28px] font-semibold mb-4">
        Get inspiration for your next trip
      </h2>
      <p class="text-zinc-800 text-base font-normal mb-[30px] w-1/2 mx-auto lg:mx-0">
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and inspiration from us
      </p>
      <ul
        class="flex gap-y-5 md:gap-x-5 flex-wrap justify-center lg:justify-start lg:flex-nowrap lg:mb-5 last:mb-0"
      >
        <li
          v-for="n in 3"
          :key="n"
          class="p-5 h-[280px] mx-[150px] w-1/2 max-w-[500px] min-w-[350px] lg:mx-0 flex lg:flex-1 flex-col justify-end items-end bg-cover rounded-md"
          :style="{ backgroundImage: `url(/images/home/2${n}.png)` }"
        >
        <div v-if="n - 1 < sec2.length" class=" ">
            <p class="text-white text-xl font-semibold mb-2">{{
              sec2[n - 1].head
            }}</p>
            <p class="text-white text-sm font-normal">{{
              sec2[n - 1].body
            }}</p>
          </div>
        </li>
      </ul>
    </section>

    <section class="mb-[60px] text-center lg:text-left">
      <h2 class="text-neutral-900 text-[28px] font-semibold mb-4">
        Popular hotels
      </h2>
      <ul
        class="flex gap-y-5 md:gap-x-5 flex-wrap justify-center lg:justify-start lg:flex-nowrap lg:mb-5 last:mb-0"
      >
        <li v-for="n in 4" :key="n">
          <img :src="`/images/home/3${n}.png`" alt="landscape image" />
          <div v-if="n - 1 < sec3.length" class="flex flex-col mt-[14px]">
            <span class="text-neutral-900 text-xl font-semibold">{{
              sec1[n - 1].country
            }}</span>
            <span class="text-neutral-900 text-sm font-normal">{{
              sec1[n - 1].properties
            }}</span>
          </div>
        </li>
      </ul>
    </section>
    <!-- hand photo -->
    <div class="bg-gradient-to-r from-black to-black rounded-lg mb-20 ">
      <div class="bg-[url('/images/home/f2.jpg')] h-[280px] relative">
        <div class="px-[69px] py-[64px] w-full lg:w-[58%]">
          <p class="text-white text-xl lg:text-[28px] font-semibold mb-[30px]">
            Download the mobile application for bonus coupons and travel codes
          </p>
          <CustomButton text="Download mobile app" />
        </div>
      </div>
    </div>
    <!-- hand photo -->
    <div class="text-center">
      <h3 class="mb-4 text-neutral-900 text-[28px] font-semibold">
        Explore the world with My Dream place
      </h3>
      <h5 class="text-blue-500 text-base font-normal">
        Discover new places and experiences
      </h5>
    </div>


  </div>
  <Modal
    v-if="freshLogin"
    @popup-closed="closePopup"
    title="Welcome to My Dream Place"
    text="You can now enjoy your travel experience with easy access to resources and more"
    btntext="Get Started"
  >
    <div
      class="mt-[70px] mb-[45px] mx-[55px] h-[200px] bg-blue-500 bg-opacity-30 rounded-[100px] bg-[url(/images/popups/d.png)] bg-center bg-contain"
    ></div>
</Modal>
</template>
<script setup>
/*****************************Imports*************************************** */
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue";

import { storeToRefs } from "pinia";
import { useHotelsStore } from "../../store";
//components
import SearchHotelsForm from "../SearchForm/SearchHotelsForm.vue";
import Warning from "../../../components/Warning.vue";
import Modal from "../../../components/Modal.vue";
import CustomButton from "../../../components/CustomButton.vue";
/*--------------------------------------------------------------------*/
//variables
const hotelsDataStore = useHotelsStore();
//to enable updates
const { searchHotelsData } = storeToRefs(hotelsDataStore);
const freshLogin = ref(localStorage.getItem("first"));
// images
const sec1 = [
  { country: "Australia", properties: "2246 properties" },
  { country: "Japan", properties: "1278 properties" },
  { country: "New Zealand", properties: "480 properties" },
  { country: "Greece", properties: "320 properties" },
];
const sec2 = [
  {
    head: "Sydeny’s 10 most fashionable 5 star hotels",
    body: "Browse the fastest growing tourism sector in the heart of Australia tourism capital",
  },
  {
    head: "Top cities for Vegan Travellers",
    body: "Top sites where you do not have to worry about being a vegan. Our tourist guide is here",
  },
  {
    head: "World’s top destinations during and post covid timeline",
    body: "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
  },
];
const sec3 = [
  { country: "Lakeside Motel Warefront", properties: "2246 properties" },
  { country: "Recce Graham resort", properties: "1278 properties" },
  { country: "Fireside Dinners", properties: "480 properties" },
  { country: "Oculous Inn Stay", properties: "320 properties" },
];
/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods
function setPageNumber() {
  localStorage.setItem("page", 1);
}
function closePopup() {
  localStorage.removeItem("first");
  freshLogin.value = false;
}
onMounted(() => {
  //  freshLogin.value = localStorage.get('first')
 // console.log("fresh login ", freshLogin.value);

});

/*--------------------------------------------------------------------*/
//watchers

/*--------------------------------------------------------------------*/
//definations

// used with script setup and setup only cos children stuff r private in them while in options Api No
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>

</style>
