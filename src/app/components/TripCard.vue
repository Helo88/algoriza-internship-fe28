<template>
 <div
    class="w-full bg-white rounded-[5px] border border-neutral-200 p-5 flex flex-col gap-y-5  justify-center items-center lg:gap-x-6 lg:items-start"
    :class="{'lg:flex-row':isCheckoutPage==false}"
  >
    <img
      src="/images/hotel/Rectangle29.png"
      alt="hortel photo"
      class="h-[180px] max-h-[200px] rounded-[5px]"
      :class="{'w-full max-w-full':isCheckoutPage,'w-1/2 lg:w-[285px] lg:max-w-[285px]':isCheckoutPage==false}"
      loading="lazy"
    />
    <div class="h-auto w-full  lg:flex-1 flex flex-col justify-between">
        <div class="">
          <h3
            class="text-zinc-900 text-xl font-medium max-w-[380px] line-clamp-1 "
            :title="props.hotelName"
          >
            {{ props.hotelName }}
          </h3>
          <div class="flex justify-start items-center ">
           <StarIcon  v-for="n in props.rate" :key="n"/>

            <span class="px-2 text-neutral-600 text-sm font-normal"
              >{{ props.rate }}
            </span>
            <span class="text-neutral-600 text-sm font-normal"
              >({{ props.reviewCount }} Reviews)</span
            >
          </div>
        </div>      
      <div class="flex  flex-col items-center  lg:flex-row lg:justify-between lg:items-end  mt-5">
       <div class="flex flex-col gap-y-2 items-center lg:items-start">
         <span class="text-rose-500 text-sm font-normal">Non refunable</span>
         <span class="text-neutral-600 text-sm font-normal">Check in: {{ formatFullNameDate(inDate) }}</span>
         <span class="text-neutral-600 text-sm font-normal">Check out: {{ formatFullNameDate(outDate) }}</span>
        <span class="text-neutral-600 text-sm font-normal">{{ getDaysDifference }} nights stay</span>
       </div>
        <div class="text-center lg:text-right" v-if="isCheckoutPage==false">
          <span
            class="line-through text-rose-500 text-sm font-meduim pr-2"
            >$150</span
          >
          <span
        
            class="text-right after:content-['includes_taxes_and_fees'] text-xl font-medium after:font-light after:text-sm after:text-zinc-800 after:block"
            >$130</span
          >
          <CustomButton   class="mt-4" text="view trip details" @click="$emit('view-trip-details')"/>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
// imports
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import CustomButton from "../../components/CustomButton.vue";
import StarIcon from "../../components/svgs/StarIcon.vue";
//functions

import {formatFullNameDate}from "../composables"
/*--------------------------------------------------------------------*/
//definations
const props = defineProps({
  hotelName: String,
  reviewCount: Number,
    rate: Number,
});
const emit= defineEmits(['view-trip-details'])
/*--------------------------------------------------------------------*/
//variables

//router
const route = useRoute();
const router = useRouter();


const inDate=ref("")
const outDate=ref("")


/*--------------------------------------------------------------------*/
//computed
//img width & main flex
const isCheckoutPage = computed(() => {
  return ["checkout"].includes(route.name);
});
const getDaysDifference = computed(() => {
  const date1 = new Date(inDate.value)
  const date2=new Date(outDate.value)
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const differenceMs = Math.abs(date1 - date2);
  return Math.round(differenceMs / oneDay);
});
/*--------------------------------------------------------------------*/
//methods
onMounted(() => {

  inDate.value = localStorage.getItem('inDate') 
  outDate.value = localStorage.getItem('outDate') 

});

/*--------------------------------------------------------------------*/
//watchers

// used with script setup and setup only cos children stuff r private in them while in options Api No
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>

</style>
