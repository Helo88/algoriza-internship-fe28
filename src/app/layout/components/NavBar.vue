<template>
  <header
    class="mx-[100px] relative"
    :class="{ 'bg-inherit text-white mx-0': isHotelsPage }"
  >
    <div
      class="flex flex-col lg:flex-row justify-between h-auto lg:h-[68px] items-center"
      :class="{ 'mx-[100px]': isHotelsPage }"
    >
      <div @click="router.push('/')" class="cursor-pointer">
        <PlaneIcon  class="mr-1" :color="isHotelsPage 
              ? 'white'
              : '#3B82F6'" />
        <span
          class="text-gray-900 text-lg font-meduim"
          :class="{ 'text-inherit': isHotelsPage }"
          >my Dream Place</span
        >
      </div>
      <nav  class="h-auto">
        <ul v-show="isCheckoutPage===false"
          class="inline-flex my-2 items-center flex-row lg:justify-start lg:items-start gap-1 lg:gap-12"
        >
          <li class="capitalize text-base" 
          :class="{ 'text-white': isHotelsPage ,'text-gray-800':!isHotelsPage }"
           v-for="route in routes" :key="route.name">
            <router-link to="/"> {{ route.name }} </router-link>
          </li>
        </ul>
      </nav>
      <CustomButton v-show="!authenticated" @click="handleLogin" text="Log in"></CustomButton>
      <div v-show="authenticated" class="inline-flex gap-x-5 items-center cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="notification 1">
            <g id="Group">
              <path
                id="Vector"
                d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.81998C17.9387 7.70401 17.6216 6.61119 17.0252 5.66795C16.4288 4.72471 15.5776 3.9696 14.5699 3.48998C14.3128 3.03332 13.9376 2.65412 13.4838 2.39201C13.0299 2.1299 12.514 1.99451 11.9899 1.99998C10.8999 1.99998 9.91994 2.58998 9.39994 3.51998C7.44994 4.48998 6.09994 6.49998 6.09994 8.81998V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
                :fill="isHotelsPage?'white':'#828282'"
              />
              <path
                id="Vector_2"
                d="M14.8299 20.01C14.6196 20.5922 14.2352 21.0954 13.7289 21.4515C13.2226 21.8075 12.6189 21.999 11.9999 22C11.2099 22 10.4299 21.68 9.87993 21.11C9.55993 20.81 9.31993 20.41 9.17993 20C9.30993 20.02 9.43993 20.03 9.57993 20.05C9.80993 20.08 10.0499 20.11 10.2899 20.13C10.8599 20.18 11.4399 20.21 12.0199 20.21C12.5899 20.21 13.1599 20.18 13.7199 20.13C13.9299 20.11 14.1399 20.1 14.3399 20.07L14.8299 20.01Z"
                fill="#828282"
              />
            </g>
            <circle
              id="Ellipse 3"
              cx="17"
              cy="6"
              r="5"
              fill="red"
              stroke="white"
              stroke-width="2"
            />
          </g>
        </svg>
      <div class="">
          <img src="/images/navbar/avatar.png" alt="" @click="showDropDown=!showDropDown">
      </div>

      </div>
    </div>
  <DropDown :data="dropdownData" class="absolute z-50 top-[65px] -right-12"
  @mouseleave="showDropDown=false"
  @user-dropdown-selected="(option)=>handleUserDropDown(option)"
  v-show="showDropDown"></DropDown>

  </header>
</template>

<script setup>
// imports
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue";
import { useRoute,useRouter } from "vue-router";
import CustomButton from "../../../components/CustomButton.vue";
import DropDown from "../../../components/DropDown.vue";
import PlaneIcon from "../../../components/svgs/PlaneIcon.vue"
/*--------------------------------------------------------------------*/
//variables
const routes = [
  { name: "home" },
  { name: "discover" },
  { name: "activities" },
  { name: "about" },
  { name: "contact" },
];
const dropdownData =ref( [
['Manage account','navbar/user.png','account'],['My trips','navbar/plane.png','trips'],['Reward and wallet','navbar/wallet.png','wallet'],['Sign out','navbar/logout.png','logout']
])
const currentRoute = useRoute();
const router = useRouter();
const authenticated = ref(localStorage.getItem("authenticated"));
const showDropDown=ref(false)
/*--------------------------------------------------------------------*/
//computed
const isHotelsPage = computed(() => {
  return ["hotels"].includes(currentRoute.name);
});
const isCheckoutPage = computed(() => {

  return ["checkout"].includes(currentRoute.name);
});

/*--------------------------------------------------------------------*/
//methods
onMounted(() => {
 // console.log("nav auth ", authenticated.value);
});
function handleUserDropDown(option) {
  showDropDown.value=false
  console.log(option)
  if (option === 'trips') router.push('/trips')
  if (option === 'logout') {
    authenticated.value=false
    localStorage.clear()
    if (currentRoute.name !== 'home')
    router.push('/')
  }
}
function handleLogin() {
  // console.log('clicked')
  setTimeout(() => {
    router.push('login')
  },300)
}
/*--------------------------------------------------------------------*/
//watchers

/*--------------------------------------------------------------------*/
//definations
const props = defineProps({});
const emit = defineEmits(["", ""]);

// used with script setup and setup only cos children stuff r private in them while in options Api No
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
