<template>
  <!-- :class="{'bg-gradient-to-b from-blue-700 to-blue-800' :isHotelsPage} -->
  <div class="">
    <div class="absolute w-[400px]  z-50 px-6 bg-white p-1  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
   <!-- slot1 -->
   <!-- <div class="mt-[50px] mb-[45px] mx-20 px-10 py-5 bg-emerald-300 bg-opacity-20 rounded-[10px]">
   <img class="w-full h-full" src="/images/popups/booking.png" alt="booking sucess image"> 
    </div> -->
  <!-- slot1 -->
 <!-- slot1 -->
<!-- <div class="mt-[50px] mb-[45px] mx-[55px]  h-[200px] bg-blue-500 bg-opacity-30 rounded-[100px] 
bg-[url(/images/popups/d.png)] bg-center bg-contain
">
</div> -->

<slot></slot>
  <!-- slot1 -->

   <!-- slot2 -->
   <h3 class="mb-3 text-center text-neutral-900 text-xl font-semibold">{{ props.title }}</h3>
  <!-- slot2 -->
    <!-- slot3 -->
    <p class="mb-[45px] text-center text-neutral-600 text-base font-normal">
{{ props.text }}
    </p>
      <!-- slot3 -->
      <CustomButton  class="w-full mb-[28px]" :text="props.btntext" @click="handlePopupClose"/> 
    </div>
   
  </div>
</template>

<script setup>
// imports
import { onMounted, ref } from "vue";
import CustomButton from "./CustomButton.vue";

/*--------------------------------------------------------------------*/
//definations
const props = defineProps({
    title: String,
    text: String,
    btntext:String
});
const emit = defineEmits(["", ""]);
/*--------------------------------------------------------------------*/
//variables
//const currentRoute = useRoute();
/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods
function handlePopupClose() {
    emit('popup-closed')
}
onMounted(() => {
    console.log('popups mounted')
})
/*--------------------------------------------------------------------*/
//watchers




// used with script setup and setup only cos children stuff r private in them while in options Api No
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>

</style>
