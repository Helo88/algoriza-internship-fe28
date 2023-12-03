<template>
  <div class="bg-zinc-100">
    <div class="lg:mx-[100px] p-1 border-2 ">
      <h1 class="text-zinc-900 text-[32px] font-semibold mt-[60px] mb-[30px]">
        Secure your reservation
      </h1>
      <Warning class="mb-[30px]" />
      <div
        class="flex flex-col items-center lg:items-start gap-y-8 lg:flex-row gap-x-[30px] mb-[141px]"
      >
        <main class="flex-1">
          <form @submit="handleBookingSuccess">
            <div class="mb-[30px] bg-white rounded-md">
              <header
                class="px-6 py-[18px] bg-blue-500 flex gap-x-4 justify-start items-center rounded-tl-md rounded-tr-md"
              >
                <img
                  src="/public/images/checkout/first.png"
                  alt="icon"
                  class="w-7 h-7"
                />
                <span class="text-white text-lg font-medium">Room 1 </span>
                <span class="text-white text-base font-medium"
                  >2 adults, 1 double bed and 1 twin bed, Non-smoking</span
                >
              </header>
              <div class="p-8 mb-10 rounded-md">
                <div class="flex gap-x-5 mb-5 w-2/3">
                  <div class="">
                    <span class="text-neutral-900 text-sm font-medium"
                      >First name</span
                    >
                    <input
                      required
                      v-model="fname"
                      placeholder="Julius"
                      type="text"
                      class="text-md block px-3 py-2 max-w-[240px] border-1 pb-3 bg-zinc-100 rounded placeholder:text-zinc-700 focus:placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div class="">
                    <span class="text-neutral-900 text-sm font-medium"
                      >Last name</span
                    >
                    <div class="relative">
                      <input
                        required
                        placeholder="Lornez"
                        class="text-md block px-3 py-2 max-w-[240px] pb-3 bg-zinc-100 rounded placeholder:text-zinc-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="mb-5 w-2/3">
                    <span class="text-neutral-900 text-sm font-medium"
                      >Mobile number</span
                    >

                    <div class="flex gap-x-5">
                      <div class="p-2 flex gap-x-2 w-[150px] bg-zinc-100">
                        <img src="/images/checkout/flag.png" alt="" />
                        <select
                          class="text-md block max-w-[150px] w-full bg-zinc-100 rounded placeholder:text-zinc-700 focus:border-blue-500 focus:outline-none"
                        >
                          <option
                            class="text-zinc-200"
                            value=""
                            selected
                            disabled
                            hidden
                          >
                            +61
                          </option>
                        </select>
                      </div>
                      <div>
                        <input
                          required
                          type="number"
                          placeholder="88672778"
                          class="text-md flex-1 px-3 py-2 border-1 bg-zinc-100 rounded placeholder:text-zinc-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex gap-x-2">
                  <input type="checkbox" class="block w-4 h-4 border-red-400" />
                  <span class="w-[223px] h-5 text-zinc-800 text-sm font-normal"
                    >Receive text alerts about this trip.</span
                  >
                </div>
              </div>
            </div>
            <div class="mb-[30px] bg-white rounded-md">
              <header
                class="px-6 py-[18px] bg-blue-500 flex gap-x-4 justify-start items-start rounded-tl-md rounded-tr-md"
              >
                <img
                  src="/public/images/checkout/second.png"
                  alt="icon"
                  class="w-7 h-7"
                />
                <span class="text-white text-lg font-medium"
                  >Payment options
                </span>
              </header>
              <p
                id="credit"
                class="inline-block py-[15px] px-8 relative text-zinc-800 text-sm font-normal"
              >
                Debit/Credit Card
              </p>
              <hr />
              <div class="p-8">
                <ul class="flex gap-x-2 mb-[26px]">
                  <li v-for="i in 4" :key="i">
                    <img :src="`/images/checkout/image${i}.png`" alt="" />
                  </li>
                </ul>

                <div>
                  <div class="mb-5">
                    <span class="text-neutral-900 text-sm font-medium"
                      >Name on card</span
                    >
                    <div class="flex gap-x-4 items-center">
                      <input
                        required
                        placeholder="Julius Lorenzo"
                        type="text"
                        class="text-md block px-3 py-2 border-1 pb-3 bg-zinc-100 rounded placeholder:text-zinc-700 focus:placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:outline-none"
                      />
                      <img src="/images/checkout/tick.png" alt="" />
                    </div>
                  </div>
                  <div class="mb-5">
                    <span class="text-neutral-900 text-sm font-medium"
                      >Debit/Credit card number</span
                    >
                    <div class="flex gap-x-4 items-center">
                      <input
                        required
                        placeholder="9923464374822293"
                        type="number"
                        class="text-md block w-2/3 px-3 py-2 border-1 pb-3 placeholder:text-zinc-700 bg-zinc-100 rounded focus:placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:outline-none"
                      />
                      <img src="/images/checkout/tick.png" alt="" />
                    </div>
                  </div>
                  <div class="mb-5">
                    <span class="text-neutral-900 text-sm font-medium"
                      >Expiration Date</span
                    >

                    <div class="flex gap-x-5 items-center">
                      <div class="p-2 flex gap-x-2 w-[150px] bg-zinc-100">
                        <select
                          class="text-md block border-1 w-full bg-zinc-100 rounded placeholder:text-zinc-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                        >
                          <option class="" value="" selected disabled hidden>
                            April
                          </option>
                        </select>
                      </div>
                      <div class="p-2 flex gap-x-2 w-[150px] bg-zinc-100">
                        <select
                          class="text-md block border-1 w-full bg-zinc-100 rounded placeholder-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                        >
                          <option class="" value="" selected disabled hidden>
                            2026
                          </option>
                        </select>
                      </div>
                      <img src="/images/checkout/tick.png" alt="" />
                    </div>
                  </div>
                  <div class="w-2/3">
                    <div class="flex gap-x-5 mb-5 items-center">
                      <div class="">
                        <span class="text-neutral-900 text-sm font-medium"
                          >Security Code</span
                        >
                        <input
                          required
                          placeholder="543"
                          type="number"
                          class="text-md block px-3 py-2 border-1 pb-3 bg-zinc-100 rounded placeholder:text-zinc-700 focus:placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      <div class="">
                        <span class="text-neutral-900 text-sm font-medium"
                          >Billing Zip code</span
                        >
                        <div class="">
                          <input
                            required
                            placeholder="203846"
                            type="number"
                            class="text-md block px-3 py-2 border-1 bg-zinc-100 rounded placeholder:text-zinc-700 placeholder-gray-600 focus:bg-white focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <img src="/images/checkout/tick.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-md">
              <header
                class="px-6 py-[18px] bg-amber-300 rounded-tl-md rounded-tr-md"
              >
                <div class="text-zinc-800 text-lg font-medium">
                  Important information about your booking
                </div>
              </header>
              <div class="px-6 pt-8">
                <ol class="mb-8 list-decimal list-inside">
                  <li>
                    This rate is non-refundable. If you change or cancel your
                    booking you will not get a refund or credit to use for a
                    future stay.
                  </li>
                  <li>Stay extensions will require a new reservation.</li>
                  <li>Front desk staff will greet guests on arrival</li>
                  <li>
                    No refunds will be issued for late check-in or early
                    check-out.
                  </li>
                </ol>

                <div class="mb-6">
                  <span style="text-neutral-600 text-sm font-normal"
                    >By clicking the button below, I acknowledge that I have
                    reviewed the </span
                  ><span class="text-blue-500 text-sm font-normal"
                    >Privacy Statement</span
                  ><span class="text-neutral-600 text-sm font-normal">
                    and have reviewd and accept the </span
                  ><span class="text-blue-500 text-sm font-normal"
                    >Rules and Restrictions</span
                  ><span style="text-neutral-600 text-sm font-normal ">
                    and</span
                  ><span style="text-blue-500 text-sm font-normal ">
                    Terms of Use</span
                  ><span style="text-neutral-600 text-sm font-normal">.</span>
                </div>
                <CustomButton class="mb-[21px]" text="Complete Booking" />
                <div class="flex gap-x-1 items-center pb-[35px]">
                  <img src="/images/checkout/lock.png" alt="" />
                  <p class="text-sm font-normal text-neutral-600">
                    We use secure transmission and encrypted storage to protect
                    your personal information
                  </p>
                </div>
              </div>
            </div>
          </form>
        </main>
        <aside class="w-[400px] max-w-[400px]">
          <TripCard
            :hotelName="props.name"
            :rate="Number(props.rate)"
            :reviewCount="props.reviews"
          />
          <div class="mt-[30px]">
            <div class="p-[18px] bg-green-300 rounded-tl-md rounded-tr-md">
              <h3 class="text-neutral-900 text-base font-medium">
                Price Details
              </h3>
            </div>
            <div class="bg-white rounded-md">
              <div class="py-5 px-[18px] flex flex-col gap-y-3">
                <div
                  class="flex justify-between text-neutral-600 text-sm font-normal"
                >
                  <span>1 room X 2 nights</span>
                  <span>$ 120.32</span>
                </div>
                <div
                  class="flex justify-between text-neutral-600 text-sm font-normal"
                >
                  <span>Tax and service fees</span>
                  <span>$8.32</span>
                </div>
              </div>
              <hr />

              <div class="py-5 px-[18px] flex justify-between">
                <span class="text-neutral-900 text-base font-medium"
                  >Total
                </span>
                <span class="text-zinc-800 text-xl font-semibold">$ 130</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
  <Modal
    v-if="viewModal"
    @popup-closed="closePopup"
    title="Booking Successful"
    text="Congratulations your reservation has been made. You will be notified 2 days prior the date"
    btntext="View trip"
  >
    <div
      class="mt-[50px] mb-[45px] mx-20 px-10 py-5 bg-emerald-300 bg-opacity-20 rounded-[10px]"
    >
      <img
        class="w-full h-full"
        src="/images/popups/booking.png"
        alt="booking sucess image"
      />
    </div>
  </Modal>
</template>
<script setup>
// imports
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import Warning from "../../../components/Warning.vue";
import CustomButton from "../../../components/CustomButton.vue";
import TripCard from "../../components/TripCard.vue";
import { formatFullNameDate } from "../../composables.js";
import { useHotelsStore } from "../../store";
import Modal from "../../../components/Modal.vue";
/*--------------------------------------------------------------------*/
//definations
const props = defineProps({
  name: String,
  rate: Number,
  reviews: Number,
});

/*--------------------------------------------------------------------*/
//variables
// const hotelsDataStore = useHotelsStore();
// const { searchHotelsData } = storeToRefs(hotelsDataStore);
const router = useRouter();
const viewModal = ref(false);
/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods
onMounted(() => {
  console.log(props);
});
function closePopup() {
  viewModal.value = false;
  router.push("/trips");
}
function handleBookingSuccess(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  viewModal.value = true;
}
/*--------------------------------------------------------------------*/
//watchers

// used with script setup and setup only cos children stuff r private in them while in options Api No
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>
#credit::after {
  content: " ";
  position: absolute;
  width: 70%;
  height: 3px;
  left: 30px;
  bottom: 0px;
  background-color: #2f80ed;
}
li {
  font-size: 15px;
  font-weight: 400;
}
</style>
