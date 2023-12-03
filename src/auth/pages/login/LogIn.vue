<template>
  <div class="bg-white min-h-screen font-sans ">
     <header
    class="mx-[100px] relative py-3"
    
  >
        <PlaneIcon  class="mr-1" :color="'#3B82F6'" />
        <span
          class="text-gray-900 text-lg font-meduim"
          >my Dream Place</span
        >
    </header>
    <div class="max-w-sm mx-auto px-6">
      <div class="relative flex flex-wrap">
        <div class="w-full relative">
          <div class="mt-[92px]">
            <div class="text-center text-neutral-900 text-[28px] font-semibold">
              Sign in
            </div>

            <form class="mt-8 mb-8">
              <div class="mx-auto max-w-lg">
                <div class="py-2">
                  <span class="text-neutral-900 text-sm font-bold"
                    >Email address</span
                  >
                  <input
                    v-model="email"
                    placeholder=""
                    type="email"
                    class="text-md block px-3 py-2 w-full pb-3 bg-zinc-100 rounded focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>
                <span v-if="emailError" style="color: red">{{
                  emailError
                }}</span>

                <div class="py-2" x-data="{ show: true }">
                  <span class="text-neutral-900 text-sm font-bold"
                    >Password</span
                  >
                  <div class="relative">
                    <input
                      v-model="password"
                      placeholder=""
                      :type="show ? 'password' : 'text'"
                      class="text-md block px-3 py-2 w-full bg-zinc-100 rounded placeholder-gray-600 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                    <div
                      class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    >
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
                        stroke-width="1.5"
                        @click="show = !show"
                        :class="{ block: !show, hidden: show }"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
                        strokeWidth="{1.5}"
                        @click="show = !show"
                        :class="{ hidden: !show, block: show }"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                      <!-- <svg class="h-6 text-gray-700" fill="none" @click="show = !show"
                      :class="{'block': !show, 'hidden':show }" 
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 640 512">
                      <path fill="currentColor"
                        d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
                      </path>
                    </svg> -->
                    </div>
                  </div>
                </div>
                <span v-if="passwordError" style="color: red">{{
                  passwordError
                }}</span>

                <button
                  @click="submitLoginForm"
                  class="mt-[33px] text-[15px] font-medium bg-blue-500 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-blue-500 hover:bg-white"
                >
                  Login
                </button>
              </div>
            </form>
            <p class="text-center">
              Don't have an account ?
              <span class="text-blue-500">Register</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import PlaneIcon from "../../../components/svgs/PlaneIcon.vue";
import { decodeToken, encodeToken } from "../../composables.js";
import { useRouter } from "vue-router";
/*--------------------------------------------------------------------*/
//variables
const show = ref(true);
const email = ref("");
const password = ref("");
const emailError = ref(null);
const passwordError = ref(null);
const router = useRouter();
/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods
// onBeforeRouteLeave((to, from) => {
      
//    localStorage.setItem('first','true')
//       console.log("new func ,", to.name,from.name)
//     })
function submitLoginForm(e) {
  e.preventDefault();

  emailError.value = null;
  passwordError.value = null;

  // Regular expressions for email and password validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;

  if (!email.value) emailError.value = "this field is required";
  else if (!emailRegex.test(email.value)) {
    emailError.value = "Invalid email format";
  } else {
  }
  // Check email against regex

  if (!password.value) passwordError.value = "this field is required";
  // Check password against regex
  else if (!passwordRegex.test(password.value)) {
    passwordError.value =
      "Password must be at least 8 characters with at least one number and one capital letter";
  } else {
  }
  // 
  if (!emailError.value && !passwordError.value) {
    //generate token //add expirey
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    const token = encodeToken({ email: email.value, date: new Date() });
    localStorage.setItem("token", token);
    localStorage.setItem('authenticated','true')
   // console.log(token);
   // console.log(decodeToken(token));
    const destination = localStorage.getItem("destination");
    localStorage.removeItem("destination");
    localStorage.setItem('first',true)
    router.push(destination ? destination : "/");
  }
}
/*--------------------------------------------------------------------*/
//watchers

/*--------------------------------------------------------------------*/
//definations
const props = defineProps({});
const emit = defineEmits(["inFocus", "submit"]);

// used with script setup and setup only cos children stuff r private in them while in options Api No
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
