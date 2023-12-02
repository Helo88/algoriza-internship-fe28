<template>
  <div class="mx-0 lg:mx-[100px] relative">
    <main id="homeMain" class="border border-black">
      <div
        class="h-[500px] p-1 mt-4 bg-cover bg-blend-overlay bg-black bg-opacity-30 rounded-[10px] relative bg-[url(/images/home/main2.png)]"
      >
        <h3
          class="text-center text-white font-bold text-[32px] mt-[180px] mb-5"
        >
          Enjoy Your Dream Vacation
        </h3>
        <p class="text-center text-white text-xl font-normal w-1/2 mx-auto">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
        <!-- 🛑🛑🛑 style of boxes to be fixed  -->
        <div class="mt-[55px]">
          <SearchHotelsForm @searchSubmitted="setPageNumber" class="mx-[105px]"></SearchHotelsForm>
        </div>
      </div>
    </main>
    <Warning class="mt-[82px]"></Warning>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </div>
  <PopUp v-if="freshLogin" @popup-closed="closePopup" title="Welcome to My Dream Place" text="You can now enjoy your travel experience with easy access to resources and more" btntext="Get Started" >
  <div class="mt-[50px] mb-[45px] mx-[55px]  h-[200px] bg-blue-500 bg-opacity-30 rounded-[100px] 
bg-[url(/images/popups/d.png)] bg-center bg-contain
"></div>
  </PopUp>
</template>
<script setup>
/*****************************Imports*************************************** */
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue";

import { storeToRefs } from "pinia";
import { useHotelsStore } from "../../store";
//components
import SearchHotelsForm from "../SearchForm/SearchHotelsForm.vue";
import Warning from "../../../components/Warning.vue";
import PopUp from "../../../components/Modal.vue";
/*--------------------------------------------------------------------*/
//variables
const hotelsDataStore = useHotelsStore();
//to enable updates
const { searchHotelsData } = storeToRefs(hotelsDataStore);
const freshLogin=ref(localStorage.getItem('first')) 
/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods
function setPageNumber() {
  localStorage.setItem('page',1)
}
function closePopup() {
  localStorage.removeItem('first')
  freshLogin.value=false
}
onMounted(() => {
//  freshLogin.value = localStorage.get('first')
  console.log('fresh login ', freshLogin.value)
  //to fech cities dropdown immediately
  // handleCitySearch();

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
/* #homeMain {
 background-position-y: 27%;
} */
</style>
