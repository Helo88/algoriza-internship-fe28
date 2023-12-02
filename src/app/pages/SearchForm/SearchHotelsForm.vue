<template>
  <div class="bg-transparent h-40 relative">
    <!-- 🛑🛑🛑 style of boxes to be fixed lg:w-10/12 1030 -->
    <form
      id="myformd"
      action=""
      class="w-full  h-auto px-3 py-[10px] bg-white rounded-lg 
      shadow relative lg:absolute lg:-bottom-2 left-0 trnasform 
     flex justify-start gap-x-3.5 gap-y-3 flex-col 
      lg:flex-row mt-44"
    >
      <!-- 🛑🛑🛑 there is an issue here lg:w-1/4 doesn't work seems like relative width doesn't work with flex -->
      <!-- in this search city the input itself wasn't used the value came from list -->
      <!-- but the model is for displaying the selected city -->
      <SearchInput
        icon="location1.svg"
        type="text"
        placeholder="Where are you going?"
        arrow="true"
        class="lg:min-w-max"
        :class="{ 'border border-red-500': searchFormErrors.cityError }"
        @click="ShowCitiesList"
        :model="cityInput"
      >
        <Error v-show="searchFormErrors.cityError" :text="errorMsg"></Error>
      </SearchInput>

      <SearchInput
        icon="calendar1.svg"
        purpose="picker"
        role="date1"
        placeholder="Check in date"
        @close="(date) => (checkInInput = date)"
        :class="{ 'border border-red-500': searchFormErrors.date1Error }"
      >
        <Error v-show="searchFormErrors.date1Error" :text="errorMsg"></Error>
      </SearchInput>

      <SearchInput
        icon="calendar1.svg"
        purpose="picker"
        role="date2"
        placeholder="Check out date"
        @close="(date) => (checkOutInput = date)"
        :class="{ 'border border-red-500': searchFormErrors.date2Error }"
      >
        <Error v-show="searchFormErrors.date2Error" :text="errorMsg"></Error>
      </SearchInput>

      <SearchInput
        icon="guest.svg"
        type="number"
        placeholder="Guests"
        :model="searchHotelsData.guests"
        @get="(data) => (guestsInput = data)"
      ></SearchInput>
      <SearchInput
        icon="bed.svg"
        type="number"
        placeholder="Rooms"
        :model="searchHotelsData.rooms"
        @get="(data) => (roomsInput = data)"
      ></SearchInput>
      <CustomButton
        text="Search"
        class="h-full w-full lg:min-w-max"
        @click="handleHomeSearchForm"
      ></CustomButton>
      <!-- 🛑 til now this list will appear even if it is empty -->
      <ListPopUp
        v-if="viewCityList"
        :data="getCitiesData.cities"
        @handle-city-input="getSelectedCity"
      ></ListPopUp>
      <!-- all error postins needed to be handled -->
      <!-- <Error v-show="searchFormErrors.fromError" :text="fromError"></Error> -->
    </form>
  </div>
</template>
<script setup>
/*****************************Imports*************************************** */
//vues
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";
//components
import SearchInput from "./components/SearchInput.vue";
import CustomButton from "../../../components/CustomButton.vue";
import ListPopUp from "../../../components/ListPopUp.vue";
import Error from "../../../components/Error.vue";

//external components
import Datepicker from "vue3-datepicker";

//functions
import formatDate from "../../composables.js";
import { getCities } from "./api";
import { getHotels } from "../hotels/api";
import { useHotelsStore } from "../../store";

/*--------------------------------------------------------------------*/
//variables
const router = useRouter();
const route = useRoute();

const hotelsDataStore = useHotelsStore();
const { searchHotelsData } = storeToRefs(hotelsDataStore);
const { updatehotelsSearchState } = useHotelsStore();

const getCitiesData = ref(new Map());
// preserve the state
const cityInput = ref(searchHotelsData.value.cityName);
const cityInputId = ref(searchHotelsData.value.id);
const checkInInput = ref(new Date(searchHotelsData.value.inDate));
const checkOutInput = ref(new Date(searchHotelsData.value.outDate));

const guestsInput = ref(searchHotelsData.value.guests);
const roomsInput = ref(searchHotelsData.value.rooms);

const viewCityList = ref(false);

const errorMsg = "this field is required";
const fromError = "Checkout and checkin can't be at the same day";
const searchFormErrors = reactive({
  cityError: false,
  date1Error: false,
  date2Error: false,
  fromError: false,
});

/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods
async function handleCitySearch() {
  getCitiesData.value = await getCities();
  console.log("my map ", getCitiesData.value.cities);
}
onMounted(() => {
  //to fetch cities dropdown immediately
 
 //handleCitySearch();
  console.log("my ffff ", searchHotelsData.value, route.name);
});
// get city and id from emit
function getSelectedCity(city, id) {
  cityInput.value = city;
  cityInputId.value = id;
  viewCityList.value = false;
}
//show hide cities drop down
function ShowCitiesList() {
  viewCityList.value = !viewCityList.value;
}
function handleHomeSearchForm(e) {
  e.preventDefault();
  let flag = true;
  let inDateFormatted = "";
  let outDateFormatted = "";

  if (!cityInput.value) {
    searchFormErrors.cityError = true;
    flag = false;
  }
  if (checkInInput.value) {
   // console.log("in  ",checkInInput.value)
    inDateFormatted = formatDate(checkInInput.value);
  } else {
    searchFormErrors.date1Error = true;
    flag = false;
  }
  if (checkOutInput.value) {
    
  //  console.log("out   ",  checkOutInput.value)
    outDateFormatted = formatDate(checkOutInput.value);
  } else {
    searchFormErrors.date2Error = true;
    flag = false;
  }
  if (checkOutInput.value.getDate() == checkInInput.value.getDate()) {
    flag = false;
    searchFormErrors.fromError = true;
  }
  // set rooms  & guests default value 
  if (!roomsInput.value) roomsInput.value = 1
  if (!guestsInput.value) guestsInput.value = 1

  //updateStore
  updatehotelsSearchState(
    cityInputId.value,
    cityInput.value,
    checkInInput.value,
    checkOutInput.value,
    roomsInput.value,
    guestsInput.value,
    inDateFormatted,
    outDateFormatted
  );

  // console.log(
  //   "form values refs ",
  //   cityInput.value,
  //   cityInputId.value,
  //   guestsInput.value,
  //   roomsInput.value,
  //   inDateFormatted,
  //   outDateFormatted
  // );

  console.log("form check ", searchHotelsData.value ,"---",flag);

  // getHotels(
  //   cityInputId.value,
  //   inDateFormatted,
  //   outDateFormatted
  // );

  if (flag == true) {
    //simulate submit at hotels 
     emit('searchSubmitted')
    if (route.fullPath != "/hotels") {
      console.log(" imma navigating ",route.fullPath)
      router.push({ path: "hotels" });
    }
  }
}
/*--------------------------------------------------------------------*/
//watchers
watchEffect(() => {
  console.log(checkInInput.value);
});
/*--------------------------------------------------------------------*/
//definations
const { props, attrs } = defineProps({});
const emit = defineEmits(["shit", ""]);

// used with script setup and setup only cos children stuff r private in them while in options Api No
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>
/* #homeMain {
 background-position-y: 27%;
} */
</style>
