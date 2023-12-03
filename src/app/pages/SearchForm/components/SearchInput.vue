<template>
  <div
    class="px-2 py-2  bg-zinc-100 rounded justify-start items-center flex relative"
    @click="handleSearchCity"
  >
    <img
      :src="`/icons/searchForm/${props.icon}`"
      class="w-5 h-5 mr-1.5"
      alt="search icon"
    />
    <input
      v-if="props.purpose != 'picker'"
      class="w-3/4 bg-blue-300 text-neutral-600 text-[13px] bg-inherit font-normal input-block outline-none focus:outline-none"
      :type="props.type"
      :placeholder="props.placeholder"
      v-model="props.model"
      @change="getData"
    />
    <!-- i need this to capture s -->
    <Datepicker	
      :lower-limit="startFromDate"
      v-if="props.purpose == 'picker'"
      class="	w-full text-neutral-600 text-[13px] bg-inherit font-normal input-block outline-none focus:outline-none"
      :placeholder="props.placeholder"
      v-model="picked"
      @closed="getDate"
      
      
    />
    <img
      v-if="props.arrow"
      src="/icons/searchForm/arrow-down1.svg"
      class="w-4 h-4 ml-2.5 lg:ml-0 transform"
      :class="{ 'rotate-180': arrowRotate }"
      alt="down arrow icon"
    />
    <!-- error slot -->
    <slot    class="">
      
    </slot>
  </div>
</template>

<script setup>
// imports
import { computed, onMounted, reactive,ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import ListPopUp from "../../../../components/ListPopUp.vue";
import Error from "../../../../components/Error.vue";
import Datepicker from "vue3-datepicker";
import { useHotelsStore } from "../../../store";

//definations
const props = defineProps({
  icon: String,
  type: String,
  purpose: String,
  placeholder: String,
  arrow: Boolean,
  model: String,
  role:String
});
// const icon = props.icon.trim(" ");

/*--------------------------------------------------------------------*/
//variables
const router = useRouter()
const route = useRoute()

const hotelsDataStore = useHotelsStore();
const { searchHotelsData } = storeToRefs(hotelsDataStore)


const arrowRotate = ref(false)
const popUpCities = ref(false)

const temp1 = searchHotelsData.value.inDate ? new Date(searchHotelsData.value.inDate) : ""
const temp2 = searchHotelsData.value.outDate ? new Date(searchHotelsData.value.outDate) : ""

//console.log("tempy ",temp1 ," == ",useRoute().fullPath ," -- ",new Date(searchHotelsData.value.inDate))
const picked = ref(props.role == "date1" ? temp1 : temp2);
const startFromDate=ref(new Date())

const emit = defineEmits(["close", "get"]);
const pickerRef = ref(null)

/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods

//onMounted(() => {console.log(picked.value)});
function handleSearchCity() {
  arrowRotate.value = !arrowRotate.value;
}
function getDate() {
  emit("close", picked.value);
 
}
function getData(event) {
  emit("get", event.target.value);
}
/*--------------------------------------------------------------------*/
//watchers

/*--------------------------------------------------------------------*/

// used with script setup and setup only cos children stuff r private in them while in options Api No
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>


</style>
