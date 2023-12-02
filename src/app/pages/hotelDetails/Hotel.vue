<template>
  <div class="bg-white">
    <div class="bg-white mb-6">
      <section class="mx-[100px] max-h-[425px] inline-flex gap-x-5">
        <div class="max-w-[820px] h-full inline-block bg-zinc-200">
          <img
            src="/images/hotel/Rectangle28.png"
            alt="hotel photo"
            class="w-full h-full"
          />
        </div>
        <div
          class="max-w-[450px] h-full flex flex-col jus justify-between gap-y-4 bg-zinc-200"
        >
          <img
            src="/images/hotel/Rectangle29.png"
            alt="hotel photo"
            class="w-full"
          />
          <img
            src="/images/hotel/Rectangle30.png"
            alt="hotel photo"
            class="w-full"
          />
        </div>
      </section>
    </div>
    <div class="bg-white">
      <ul id="mainHeader" class="mx-[100px] bg-white flex gap-x-[42px]">
        <li>Overview</li>
        <li>Rooms</li>
      </ul>
    </div>
    <div class="bg-zinc-100">
      <main class="mx-[20px] lg:mx-[100px] m mb-64 lg:mb-0">
        <div
          class="flex flex-col items-center lg:items-start lg:flex-row justify-between gap-8"
        >
          <section class="pt-10 w-full lg:flex-1 border-4 border-yellow-400">
            <header class="pb-8 w-full border-t-2">
              <h2
                class="text-zinc-900 text-[32px] font-semibold mb-3 line-clamp-1"
                title="displayedHotel.details.hotel_name"
              >
                {{ displayedHotel.details.hotel_name }}
              </h2>
              <div class="flex justify-start items-center mb-[10px]">
                <StarIcon v-for="n in Number(hotelRate)" :key="n" />
                <span class="px-2 text-neutral-600 text-sm font-normal"
                  >{{ hotelRate }}
                </span>
                <span class="text-neutral-600 text-sm font-normal"
                  >({{ hotelReviews }} Reviews)</span
                >
              </div>
              <div class="flex justify-start gap-x-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" fill="#292D32" />
                  <g id="Product detail" clip-path="url(#clip0_0_1)">
                    <rect
                      width="1440"
                      height="2470"
                      transform="translate(-100 -732)"
                      fill="#F4F4F4"
                    />
                    <g id="location 1">
                      <g id="Group">
                        <path
                          id="Vector"
                          d="M9.9999 11.1917C10.3413 11.1917 10.6794 11.1244 10.9949 10.9938C11.3103 10.8631 11.5969 10.6716 11.8384 10.4302C12.0798 10.1887 12.2713 9.90212 12.402 9.58668C12.5327 9.27123 12.5999 8.93314 12.5999 8.5917C12.5999 8.25026 12.5327 7.91217 12.402 7.59672C12.2713 7.28128 12.0798 6.99465 11.8384 6.75322C11.5969 6.51179 11.3103 6.32027 10.9949 6.18961C10.6794 6.05895 10.3413 5.9917 9.9999 5.9917C9.31034 5.9917 8.64902 6.26563 8.16142 6.75322C7.67383 7.24082 7.3999 7.90214 7.3999 8.5917C7.3999 9.28126 7.67383 9.94258 8.16142 10.4302C8.64902 10.9178 9.31034 11.1917 9.9999 11.1917V11.1917Z"
                          stroke="#2F80ED"
                          stroke-width="1.5"
                        />
                        <path
                          id="Vector_2"
                          d="M3.01675 7.07484C4.65842 -0.141828 15.3501 -0.133494 16.9834 7.08317C17.9417 11.3165 15.3084 14.8998 13.0001 17.1165C12.1935 17.8945 11.1165 18.3292 9.99592 18.3292C8.87529 18.3292 7.79835 17.8945 6.99175 17.1165C4.69175 14.8998 2.05842 11.3082 3.01675 7.07484V7.07484Z"
                          stroke="#2F80ED"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_0_1">
                      <rect
                        width="1440"
                        height="2470"
                        fill="white"
                        transform="translate(-100 -732)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <p class="text-zinc-800 text-sm font-normal">
                  {{ displayedHotel.details.address }}
                </p>
              </div>
            </header>

            <div id="card" class="pt-6 px-8 pb-[44px] bg-white rounded-md">
              <h1 class="text-neutral-900 text-lg font-medium mb-5">
                overview
              </h1>
              <p
                class="max-h-[198px] text-neutral-600 text-base font-normal line-clamp-6 mb-10"
                :title="displayedHotelInfo.description"
              >
                {{ displayedHotelInfo.description }}
              </p>
              <hr class="" />
              <div class="pt-[26px]">
                <h2 class="text-neutral-900 text-lg font-medium mb-6">
                  Top Facilities
                </h2>
                <ul class="">
                  <li
                    v-for="(item, index) in displayedHotel.details
                      .facilities_block.facilities"
                    :key="item.icon"
                    class="flex"
                  >
                    <div
                      v-if="index % 2 == 0"
                      class="w-3/4 flex flex-col lg:flex-row lg:justify-start lg:gap-x-[110px]"
                    >
                      <p class="flex gap-x-3 flex-1 lg:mb-3">
                        <LikeIcon color="#2F80ED" />
                        <span class="text-neutral-600 text-[15px] font-normal">
                          {{ item.name }}
                        </span>
                      </p>

                      <p
                        class="flex gap-x-3 flex-1"
                        v-if="
                          index + 1 <
                          displayedHotel.details.facilities_block.facilities
                            .length
                        "
                      >
                        <LikeIcon color="#2F80ED" />
                        <span class="text-neutral-600 text-[15px] font-normal">
                          {{
                            displayedHotel.details.facilities_block.facilities[
                              index + 1
                            ].name
                          }}
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <aside
            class="mt-10 w-full lg:w-[295px] lg:max-w-[295px] h-[200px] bg-zinc-200"
          >
            <iframe
              :src="`https://maps.google.com/maps?q=${displayedHotel.details.latitude},${displayedHotel.details.longitude}&z=15&output=embed`"
              width="100%"
              height="200"
              frameborder="0"
              style="border: 0"
            ></iframe>
            <div class="mt-[35px]">
              <h3 class="text-neutral-900 text-lg font-medium mb-5">
                Explore the area
              </h3>
              <ul>
                <li
                  class="flex gap-x-2 mb-3 text-neutral-600 text-sm font-normal"
                >
                  <PlaneIcon color="#4F4F4F" />

                  <span>Hotel Penselvenyia</span>
                </li>
                <li
                  class="flex gap-x-2 mb-3 text-neutral-600 text-sm font-normal"
                  v-for="n in 4"
                  :key="n"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="bxs-map 1">
                      <g id="Group">
                        <path
                          id="Vector"
                          d="M9.99974 1.6665C6.32391 1.6665 3.33308 4.65734 3.33308 8.329C3.30891 13.6998 9.74641 18.1532 9.99974 18.3332C9.99974 18.3332 16.6906 13.6998 16.6664 8.33317C16.6664 4.65734 13.6756 1.6665 9.99974 1.6665ZM9.99974 11.6665C8.15808 11.6665 6.66641 10.1748 6.66641 8.33317C6.66641 6.4915 8.15808 4.99984 9.99974 4.99984C11.8414 4.99984 13.3331 6.4915 13.3331 8.33317C13.3331 10.1748 11.8414 11.6665 9.99974 11.6665Z"
                          fill="#4F4F4F"
                        />
                      </g>
                    </g>
                  </svg>

                  <span>Olivia Jonson Garden</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
    <div class="bg-zinc-100">
      <div class="mx-[50px] lg:mx-[100px] pt-10">
        <h2 class="text-neutral-900 text-2xl font-semibold mb-8">
          Available rooms
        </h2>
        <section class="bg-inherit border-4 border-rose-400">
          <div
            class="flex flex-col gap-y-5 justify-center items-center lg:flex-row lg:items-start lg:justify-between lg:gap-x-5 lg:gap-y-5"
            :class="{ 'flex-wrap': shouldFlexWrap }"
          >
            <div
              class="max-w-[400px] h-[320px] pr-[69px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-md"
            >
              <div class="w-full h-full pl-7 flex" id="person">
                <div class="mt-[70px]">
                  <div class="flex gap-x-1">
                    <PlaneIcon color="white" />
                    <h5 class="text-white text-lg font-medium mb-5">
                      my Dream Place
                    </h5>
                  </div>
                  <div class="w-3/4">
                    <span class="text-white text-2xl font-bold"
                      >20% off<br />Use Promotional Coupon Code:<br
                    /></span>
                    <span class="text-yellow-400 text-2xl font-bold"
                      >Orlando</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- displayedHotel.details.available_rooms -->
            <RoomCard
              v-for="room in 2"
              :key="room"
              @reserved="handelReservation"
            />
          </div>
        </section>
      </div>
      <Warning class="mt-[172px] lg:mx-[100px]"></Warning>
    </div>
  </div>
</template>
<script setup>
// imports
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";

//functions
import { useHotelsStore } from "../../store";
import { getHotelDetails, getHotelInfo } from "./api.js";

import { hotel, d } from "./obj.js";
import RoomCard from "./components/RoomCard.vue";
import PlaneIcon from "../../../components/svgs/PlaneIcon.vue";
import StarIcon from "../../../components/svgs/StarIcon.vue";
import LikeIcon from "../../../components/svgs/LikeIcon.vue";
import Warning from "../../../components/Warning.vue";
/*--------------------------------------------------------------------*/
//definations
const props = defineProps({
  id: Number,
  count: Number,
  rate: Number,
});

/*--------------------------------------------------------------------*/
//variables
const hotelId = ref(props.id);
const hotelRate = ref(props.rate);
const hotelReviews = ref(props.count);
//router
const currentRoute = useRoute();
const router = useRouter();
//store
const hotelsDataStore = useHotelsStore();
const { searchHotelsData } = storeToRefs(hotelsDataStore);
const { updateTripsList } = useHotelsStore();

//hotel & error
const displayedHotel = ref({
  // temp init
  details: { ...hotel }, //to be empty object
  error: "",
});
const displayedHotelInfo = ref({
  //:""
  description: d.description,
  error: "",
});

/*--------------------------------------------------------------------*/
//computed
const getImg1Src = computed(() => {
  // return displayedHotel.value.details.rooms[hotelId].photos[0].url_original
  return "";
});
const shouldFlexWrap = computed(() => {
  return displayedHotel.value.details?.available_rooms
    ? displayedHotel.value.details.available_rooms > 2
      ? true
      : false
    : false;
});
/*--------------------------------------------------------------------*/
//methods
onMounted(() => {
  console.log("hotel page mounts", hotelRate.value, hotelReviews.value);
  console.log(displayedHotel.value.details);

  // handleHotelInfo()
  // handleHotelDetails()
});
async function handleHotelDetails() {
  // is suppose to add loader heres

  const temp = await getHotelDetails(
    props.id,
    searchHotelsData.value.inDateFormatted,
    searchHotelsData.value.outDateFormatted,
    searchHotelsData.value.guests,
    searchHotelsData.value.rooms
  );
  displayedHotel.value.details = temp.details;
  displayedHotel.value.error = temp.error;
  console.log(displayedHotel.value.details);
}
async function handleHotelInfo() {
  //  suppose to add loader heres

  const temp = await getHotelInfo(props.id);
  displayedHotelInfo.value.description = temp.details;
  displayedHotelInfo.value.error = temp.error;
  console.log(displayedHotelInfo.value.description);
}
function handelReservation() {
  updateTripsList(
    hotelId.value,
    displayedHotel.value.details.hotel_name,
    hotelRate.value,
    hotelReviews.value,
    searchHotelsData.value.inDate,
    searchHotelsData.value.outDate
  );
  if (localStorage.getItem("trips")) {
    updateStorageList()
  }
  else {
    localStorage.setItem('trips', JSON.stringify([]))
    updateStorageList()
  }
 

    router.push({ path: `/checkout/${displayedHotel.value.details.hotel_name}/${hotelRate.value}/${hotelReviews.value}`  });

}
function updateStorageList() {
  let list = JSON.parse(localStorage.getItem("trips"));
  const newTrip = {
    hotelName: displayedHotel.value.details.hotel_name,
    rate: hotelRate.value,
    reviewCount: hotelReviews.value,
    inDate: searchHotelsData.value.inDate,
    outDate: searchHotelsData.value.outDate,
  };
  list.push(newTrip);
  localStorage.setItem("trips", JSON.stringify(list));
}
/*--------------------------------------------------------------------*/
//watchers

// used with script setup and setup only cos children stuff r private in them while in options Api No
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>
#mainHeader li {
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.32px;
  padding: 16px 0;
  position: relative;
}
#mainHeader li:first-of-type::after {
  content: " ";
  position: absolute;
  width: 100%;
  height: 3px;
  left: 0px;
  bottom: 0px;
  background-color: #2f80ed;
}
#person {
  background-image: url("/images/hotel/person.svg");
  background-position: right bottom;
  background-repeat: no-repeat;
}
</style>
