<template>
  <div class="bg-transparent h-40 relative">
    <!-- 🛑🛑🛑 style of boxes to be fixed lg:w-10/12 1030 -->
    <form
      id="myformd"
      action=""
      class="w-full h-auto px-3 py-[10px] bg-white rounded-lg shadow relative lg:absolute lg:-bottom-2 left-0 trnasform flex justify-start gap-x-3.5 gap-y-3 flex-col lg:flex-row mt-44"
    >
      <!-- 🛑🛑🛑 there is an issue here lg:w-1/4 doesn't work seems like relative width doesn't work with flex -->
      <!-- in this search city the input itself wasn't used the value came from list -->
      <!-- but the model is for displaying the selected city -->
      <SearchInput
        icon="location1.svg"
        type="text"
        placeholder="Where are you going?"
        arrow="true"
        class="w-full lg:w-[185px]"
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
        class="flex-1"
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
        class="flex-1"
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
        class="flex-1"
      ></SearchInput>
      <SearchInput
        icon="bed.svg"
        type="number"
        placeholder="Rooms"
        :model="searchHotelsData.rooms"
        @get="(data) => (roomsInput = data)"
        class="flex-1"
      ></SearchInput>
      <CustomButton
        text="Search"
        class="flex-1"
        @click="handleHomeSearchForm"
      ></CustomButton>
      <!-- 🛑 til now this list will appear even if it is empty -->
      <ListPopUp
        v-show="viewCityList"
        :data="getCitiesData.cities"
        @handle-city-input="getSelectedCity"
      ></ListPopUp>
      <!-- all error postins needed to be handled -->
      <Error
        v-show="searchFormErrors.formError"
        :text="formError"
        class="right-0 -bottom-14 w-3/4"
      ></Error>
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
import { formatDate } from "../../composables.js";
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
//this isn't
const errorMsg = "this field is required";
//this msg changes based on 2 conditions
const formError = ref("");
const searchFormErrors = reactive({
  cityError: false,
  date1Error: false,
  date2Error: false,
  formError: false,
});

/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods
async function handleCitySearch() {
  getCitiesData.value = await getCities();
  // console.log("my cities map ", getCitiesData.value.cities);
}
onMounted(() => {
  //to fetch cities dropdown immediately

  handleCitySearch();

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
// new Map([
//     [
//         "Cairo",
//         "-290692"
//     ],
//     [
//         "Hurghada",
//         "-290029"
//     ],
//     [
//         "Sharm El Sheikh",
//         "-302053"
//     ]
// ])
function handleHomeSearchForm(e) {
  e.preventDefault();
  let flag = true;
  let inDateFormatted = "";
  let outDateFormatted = "";

  // cityInput.value = "Cairo"
  // cityInputId.value = "-290692"
   
  if (!cityInput.value) {
    searchFormErrors.cityError = true;
    flag = false;
    console.log("error name");
  } else {
    searchFormErrors.formError = false;
  }
  // it can't turn " " to date which is the initail value
  if (!isNaN(checkInInput.value.getTime())) {
    // console.log("yes date",checkInInput)
    inDateFormatted = formatDate(checkInInput.value);
    searchFormErrors.date1Error = false;
  } else {
    // console.log("inDate in form submit  ",checkInInput.value)
    searchFormErrors.date1Error = true;
    flag = false;
  }
  if (!isNaN(checkOutInput.value.getTime())) {
    outDateFormatted = formatDate(checkOutInput.value);
    searchFormErrors.date2Error = false;
  } else {
    searchFormErrors.date2Error = true;
    flag = false;
  }

  if (checkInInput.value.getTime() == checkOutInput.value.getTime()) {
    flag = false;
    searchFormErrors.formError = true;
    formError.value = "Checkout and checkin date can't be at the same day";
  } else if (checkOutInput.value.getTime() <= checkInInput.value.getTime()) {
    flag = false;
    searchFormErrors.formError = true;
    formError.value =
      "Checkout date must be atleast a day after the checkin date";
  } else {
    searchFormErrors.formError = false;
  }

  // set rooms  & guests default value
  if (!roomsInput.value) roomsInput.value = 1;
  if (!guestsInput.value) guestsInput.value = 1;

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


  // console.log("inside form check ", searchHotelsData.value, "---", flag);

  if (flag == true) {
    //simulate submit at hotels
    emit("searchSubmitted");
    if (route.fullPath != "/hotels") {
      // const uthenticated = localStorage.getItem('authenticated')
      router.push("/hotels");
    }
  }
}
/*--------------------------------------------------------------------*/
//watchers
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
