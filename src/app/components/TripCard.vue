<template>
 <div
    class="w-full bg-white rounded-[5px] border border-neutral-200 p-5 flex flex-col gap-y-5  justify-center items-center lg:gap-x-6 lg:items-start"
    :class="{'lg:flex-row':isCheckoutPage==false}"
  >
    <img
      src="/images/hotel/Rectangle29.png"
      alt="hortel photo"
      class="h-[180px] max-h-[200px] rounded-[5px]"
      :class="{'w-full max-w-full':isCheckoutPage,'w-3/4 lg:w-[285px] lg:max-w-[285px]':isCheckoutPage==false}"
      loading="lazy"
    />
    <div class="h-auto w-full  lg:flex-1 flex flex-col justify-between">
        <div class="">
          <h3
            class="text-zinc-900 text-xl font-medium max-w-[380px] line-clamp-1"
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
      <div class="flex justify-between items-end  mt-5">
       <div class="flex flex-col gap-y-2">
         <span class="text-rose-500 text-sm font-normal">Non refunable</span>
         <span class="text-neutral-600 text-sm font-normal">Check in: {{ props.checkIn }}</span>
         <span class="text-neutral-600 text-sm font-normal">Check out: {{ props.checkOut }}</span>
        <span class="text-neutral-600 text-sm font-normal">2 nights stay</span>
       </div>
        <div class="text-right" v-if="isCheckoutPage==false">
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
import { storeToRefs } from "pinia";
import StarIcon from "../../components/svgs/StarIcon.vue";
import CustomButton from "../../components/CustomButton.vue";

//functions
import { useHotelsStore } from "../store.js";
/*--------------------------------------------------------------------*/
//definations
const props = defineProps({
  hotelName: String,
  reviewCount: Number,
    rate: Number,
    checkIn: String,
  checkOut:String
});
const emit= defineEmits(['view-trip-details'])
/*--------------------------------------------------------------------*/
//variables

//router
const route = useRoute();
const router = useRouter();
//store
const hotelsDataStore = useHotelsStore();
const { tripsList } = storeToRefs(hotelsDataStore);





/*--------------------------------------------------------------------*/
//computed
//img width & main flex
const isCheckoutPage = computed(() => {
  return ["checkout"].includes(route.name);
});
/*--------------------------------------------------------------------*/
//methods
onMounted(() => {


  
});

/*--------------------------------------------------------------------*/
//watchers

// used with script setup and setup only cos children stuff r private in them while in options Api No
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>

</style>
