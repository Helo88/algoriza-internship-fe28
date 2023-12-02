<template>
  <div>
    <div class="h-[132px] relative">
      <SearchHotelsForm
        class="mx-[205px]"
        @searchSubmitted="triggerMount"
      ></SearchHotelsForm>
    </div>

    <div class="bg-white mb-14 border-4 border-rose-600">
     <div class="mx-[100px] ">
       <div
        class="min-h-[100vh] bg-white mt-[104px] flex flex-col lg:flex-row gap-x-8 border-2 border-purple-500"
      >
        <aside class="lg:max-w-[295px] h-full">
          <div
            id="searchProperty"
            class="px-[18px] py-[20px] mb-5 bg-zinc-100 rounded-md"
          >
            <h5 class="text-neutral-900 text-base font-bold mb-4">
              Search by property name
            </h5>
            <div
              class="bg-white border p-3 border-neutral-200 rounded inline-flex flex-row items-center justify-start gap-x-[10px]"
            >
              <img
                class="w-5 h-5"
                src="/public/icons/search 1.svg"
                alt="search icon"
              />
              <input
                class="outline-none rounded flex-1"
                type="text"
                placeholder="eg.beach westpalm"
                v-model="propertyName"
                @click="handleSearchProperty"
              />
            </div>
          </div>
          <div id="filter" class="mb-5">
            <h5 class="mb-5 px-3 text-zinc-800 text-lg font-semibold">
              Filter by
            </h5>
            <div
              class="filter-box rounded-md rounded-tr-md border border-neutral-2"
            >
              <h6
                class="p-[18px] bg-zinc-100 text-neutral-900 text-base font-bold"
              >
                Your budget per day
              </h6>
              <div class="px-[18px] py-[18px]">
                <div class="checkBoxesFilter mb-[6px]">
                  <RadioInput
                    id="radio1"
                    text="$ 0 - $ 500 "
                    @filteredByRadio="filteredPriceInput"
                    :active="toggleState"
                  ></RadioInput>
                  <RadioInput
                    id="radio2"
                    text="$ 500 - $ 1000 "
                    @filteredByRadio="filteredPriceInput"
                    :active="toggleState"
                  ></RadioInput>
                  <RadioInput
                    id="radio3"
                    text="$ 1000 - $ 2000 "
                    @filteredByRadio="filteredPriceInput"
                    :active="toggleState"
                  ></RadioInput>
                  <RadioInput
                    id="radio4"
                    text="$ 2000 - $ 5000 "
                    @filteredByRadio="filteredPriceInput"
                    :active="toggleState"
                  ></RadioInput>
                </div>
                <div class="manual-filter">
                  <div class="flex justify-between mb-4">
                    <span
                      class="w-[126px] h-5 text-neutral-600 text-sm font-normal"
                      >Set your own budget</span
                    >

                    <ToggleButton
                      @toggled="(data) => (toggleState = data)"
                    ></ToggleButton>
                  </div>
                  <div class="manual-filter-inputs flex gap-x-[30px] w-full">
                    <BudgetInput
                      placeholder="Min Budget"
                      :active="toggleState"
                      @filteredByInput="
                        (data) => (manualBudgetFilter.minBudget = data)
                      "
                    ></BudgetInput>
                    <BudgetInput
                      placeholder="Max Budget"
                      :active="toggleState"
                      @filteredByInput="
                        (data) => (manualBudgetFilter.maxBudget = data)
                      "
                    ></BudgetInput>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="rating"
            class="rounded-md rounded-tr-md border border-neutral-2"
          >
            <div>
              <h6
                class="p-[18px] bg-zinc-100 text-neutral-900 text-base font-bold"
              >
                Rating
              </h6>
            </div>
            <div class="p-[18px]">
              <h6 class="text-neutral-600 text-sm font-normal mb-2">
                Show only ratings more than
              </h6>
              <ul
                class="bg-white rounded-[5px] rounded-bl-[5px] border border-neutral-200 inline-flex w-full justify-between"
              >
                <li
                  v-for="n in 5"
                  :key="n"
                  class="p-2 border-r-[1px] border-zinc-100 cursor-pointer"
                  @click="handleRating(n)"
                >
                  <div class="inline-flex items-center">
                    {{ n }}
                    <svg
                      class="inline"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="star-s-fill 1" clip-path="url(#clip0_1_673)">
                        <g id="Group">
                          <path
                            id="Vector"
                            d="M8.99993 12.75L4.59143 15.4425L5.78993 10.4175L1.86743 7.0575L7.01618 6.645L8.99993 1.875L10.9837 6.645L16.1332 7.0575L12.2099 10.4175L13.4084 15.4425L8.99993 12.75Z"
                            fill="#F2994A"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_673">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <br />
        </aside>
        <main class="bg-green-100 w-full">
          <div class="flex justify-between">
            <h2
              class="inline-block py-[16px] bg-yellow-200 text-neutral-900 text-2xl font-semibold w-[504px] max-w-[504px]"
            >
              {{ searchHotelsData.cityName }}:
              {{ hotelsListlengthComputed }} results found
            </h2>
            <div
              class="w-[190px] h-12 py-2 px-3 bg-white rounded-md border border-stone-300 flex flex-col"
            >
              <span class="text-zinc-500 text-xs font-medium">sort by</span>
              <select
                name="sortHotels"
                id="sortHotels"
                class="outline-none focus:outline-none w-full text-zinc-800 text-sm font-normal"
                v-model="selectedCategory"
                :disabled="disableCategorySelect"
                @change="handleGetHotels(selectedCategory)"
              >
                <option v-if="sortCategories.categories.length == 0" disabled>
                  no categories available
                </option>
                <option
                  class="text-zinc-800 text-xs font-normal"
                  v-for="cat in sortCategories.categories"
                  :key="cat.id"
                  :value="cat.id"
                >
                  {{ cat.id }}
                </option>
              </select>
            </div>
          </div>
          <!-- add consition to handle empty list  -->
          <div id="hotelsCard" v-if="loadingStatus == false">
            <Card
              v-for="hotel in resultList"
              :key="hotel.hotel_id"
              :hotel="hotel"
            ></Card>

        
          </div>
          <p
            class="text-red-500 text-4xl p-5 text-center"
            v-show="resultList.length === 0"
          >
            No results found
          </p>
          <p
            class="text-zinc-500 text-4xl p-5 text-center"
            v-show="loadingStatus && resultList.length !== 0"
          >
            Results loading
          </p>
        </main>
      </div>
     </div>
    </div>
    <div id="pagination" class="mb-24 text-center">
      <PagesList
        :total="paginationUpperLimitComputed"
        @selectPage="getHotelsInPage"
      ></PagesList>
    </div>
    <Warning class="lg:mx-[100px]"></Warning>
  </div>
</template>
<script setup>
// imports
//vues
import {
  computed,
  onMounted,
  reactive,
  ref,
  watch,
  watchEffect,
  onUnmounted,
} from "vue";

import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";
//components
import SearchHotelsForm from "../SearchForm/SearchHotelsForm.vue";
import RadioInput from "./components/RadioInput.vue";
import ToggleButton from "./components/ToggleButton.vue";
import BudgetInput from "./components/BudgetInput.vue";
import Card from "./components/Card.vue";
import PagesList from "./components/PagesList.vue";
import Warning from "../../../components/Warning.vue";
//functions
import { useHotelsStore } from "../../store";
import { getHotels, sortHotels } from "./api.js";
/*--------------------------------------------------------------------*/
/*--------------------------------------------------------------------*/
//definations
const { props, attrs } = defineProps({});
const emit = defineEmits(["searchSubmitted", ""]);
/*-------------------------------------------------------*/
import { myObj } from "./obj";
//variables
const mounted = ref(false);
const pageNumber = ref(
  localStorage.getItem("page") ? localStorage.getItem("page") : 1
);
//store
const hotelsDataStore = useHotelsStore();
const { searchHotelsData } = storeToRefs(hotelsDataStore);

const router = useRouter();
const propertyName = ref("");
let debouncerTimer = null;
const toggleState = ref(false);
const manualBudgetFilter = ref({ minBudget: 0, maxBudget: 0 });

//min,max value
let radioBudget = [];
//hotels & error
const displayedHotels = ref({
  hotels: [],
  error: "",
  resultsCount: localStorage.getItem("totalresults"),
});
//categories&error
const sortCategories = ref({ categories: [], error: "" });
const selectedCategory = ref("");
const disableCategorySelect = ref(false);
// loader
const loadingStatus = ref(false);
const resultList = ref([]);
const totalResultsCount = ref(localStorage.getItem("totalresults"));
//  const  filteredPriceInput  = ref("");

const fireFlag = ref(false);
/*--------------------------------------------------------------------*/
//computed
// all results not just the displayed
const hotelsListlengthComputed = computed(() => {
  return totalResultsCount.value;
});
const paginationUpperLimitComputed = computed(() => {
  return totalResultsCount.value
    ? Math.round(Number(localStorage.getItem("totalresults")) / 20)
    : 1;
});
/*--------------------------------------------------------------------*/
//methods
const onClickHandler = (page) => {
  console.log(page);
};

function filteredPriceInput(data) {
  console.log("radio pricqe ", data);
  const ranges = data.split("-");
  radioBudget = ranges.map((item) => item.slice(2, -1));
  console.log(" radio filters ", radioBudget);
  //call api and disable them
  loadingStatus.value = true;
  handleGetHotels(null, Number(radioBudget[0]), Number(radioBudget[1]));
  loadingStatus.value = false;
}

async function handleGetHotels(sortby = null, min = "", max = "") {
  //  suppose to add loader heres
  console.log("get hotels runs");
  loadingStatus.value = true;
  const temp = await getHotels(
    searchHotelsData.value.id,
    searchHotelsData.value.inDateFormatted,
    searchHotelsData.value.outDateFormatted,
    searchHotelsData.value.guests,
    searchHotelsData.value.rooms,
    sortby,
    min,
    max,
    pageNumber.value
  );

  displayedHotels.value.hotels = await temp.hotels;
  console.log("my hotels displayedHtels", displayedHotels.value.hotels);
  displayedHotels.value.error = temp.error;
  displayedHotels.value.resultsCount = temp.resultsCount;

  resultList.value = displayedHotels.value.hotels;
  
  console.log("my hotels from list ", resultList.value);
  console.log("pageNumber.value", pageNumber.value);
  if (pageNumber.value == 1) {
    console.log("yes one ");
    localStorage.setItem("totalresults", displayedHotels.value.resultsCount);
    totalResultsCount.value = displayedHotels.value.resultsCount;
  }
  loadingStatus.value = false;
  fireFlag.value = false;
}
async function handleSortHotels() {
  // is suppose to add loader heres

  const temp = await sortHotels(
    searchHotelsData.value.id,
    searchHotelsData.value.inDateFormatted,
    searchHotelsData.value.outDateFormatted,
    searchHotelsData.value.guests,
    searchHotelsData.value.rooms
  );
  sortCategories.value.categories = temp.categories;
  sortCategories.value.error = temp.error;
  //console.log("my cats ", sortCategories.value.categories.length);
}
// if i submit the form inside thsis page it won't work til this function
function triggerMount() {
  console.log("form fucks hotels ");
  //each new search start from beginning
  pageNumber.value = 1;
  if (fireFlag.value == false) {
    loadingStatus.value = true;
    handleGetHotels(selectedCategory.value);
    loadingStatus.value = false;
    fireFlag.value = true;
  }
}

onMounted(() => {
  // api will tb called to fetch all hotels
  console.log("hotels mounts ", mounted.value);
  fireFlag.value = true;
  displayedHotels.value.hotels=myObj
   resultList.value = myObj;
  //console.log(" my obj " ,displayedHotels.value.hotels)
  // handleGetHotels();
  //handleSortHotels();
});
function handleSearchProperty() {
  resultList.value = displayedHotels.value.hotels.filter((hotel) =>
    hotel.property.name.includes(propertyName.value)
  );
}
function handleRating(rate) {
  resultList.value = displayedHotels.value.hotels.filter(
    (hotel) => hotel.property.reviewScore >= rate * 2
  );
}
function getHotelsInPage(page) {
  console.log("shity ", page);
  pageNumber.value = page;
  localStorage.setItem("page", page);
  handleGetHotels();
}
/*--------------------------------------------------------------------*/
//watchers
// propertName - > real time search
//budget  => disable rest til get results
const stopWatchingBudget = watch(manualBudgetFilter.value, () => {
  loadingStatus.value = true;
  handleGetHotels(
    null,
    Number(manualBudgetFilter.value),
    Number(manualBudgetFilter.value)
  );
  loadingStatus.value = true;
});
// watchEffect(() => {
//   console.log("watchy",minBudget.value,maxBudget.value)
// })
//call search hotels
// watch(
//   () => selectedCategory.value,
//   () => {
//     console.log("select cat ", selectedCategory.value)
//   })

// property
const stopWatchingProperty = watch(
  () => propertyName.value,
  () => {
    clearTimeout(debouncerTimer);
    debouncerTimer = setTimeout(() => {
      handleSearchProperty(propertyName.value);
    }, 100);
  }
);
/*----------------------------------- */
onUnmounted(() => {
  stopWatchingProperty();
  stopWatchingBudget();
});
/*--------------------------------------------------------------------*/
</script>

<style scoped></style>
