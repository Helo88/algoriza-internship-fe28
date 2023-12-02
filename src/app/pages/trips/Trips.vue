<template>
<div class="bg-zinc-100 min-h-[100vh]">
    <div class="mx-[50px] lg:mx-[205px] p-1 border-2 border-rose-300">
      <h1 class="text-zinc-900 text-[32px] font-semibold mt-[60px] mb-[30px]">
        My trips
      </h1>
      <p v-if="tripsList.length==0">Np trips yet</p>
     <div v-else>
     <TripCard v-for="trip in tripsList" :key="trip.hotelName" 
     :hotelName="trip.hotelName"
     :rate="Number(trip.rate)"
     :reviewCount="trip.reviewCount"
     :checkIn="trip.inDate"
     :checkOut="trip.outDate"
     @view-trip-details="handleViewTrip(trip.hotelId,trip.rate,trip.reviewCount)"
     class="mb-6"
     />
     </div>
     
      </div>
      <Warning class="mx-[20px] lg:mx-[100px] mt-[80px] "   />
      </div>
</template>

<script setup>
// imports
import { computed, onMounted,ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import TripCard from "../../components/TripCard.vue";
import Warning from "../../../components/Warning.vue";
//functions
import { useHotelsStore } from "../../store";
/*--------------------------------------------------------------------*/
//definations
const props = defineProps({
  id: Number,
  count: Number,
  rate: Number,
});
/*--------------------------------------------------------------------*/
//variables
const hotelsDataStore = useHotelsStore();
const { tripsList } = storeToRefs(hotelsDataStore);
const router=useRouter()
/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods
function handleViewTrip(hotelId, rate, reviewCount){
    router.push({ path: `hotel/${hotelId}/${rate}/${reviewCount}`  });

}
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
