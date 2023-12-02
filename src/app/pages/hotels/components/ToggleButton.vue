<template>
 <label
   for="toogleTwo"
   class="flex items-center cursor-pointer select-none text-dark dark:text-white"
   >
   <div class="relative">
      <input
         id="toogleTwo"
         type="checkbox"
         class="peer sr-only"
         v-model="checked"
         @click="handleToggle"
         />
      <div
         class="h-4 w-9 rounded-full shadow-inner bg-gray-300 dark:bg-dark "
         ></div>
      <div
         class="absolute shadow-lg left-0 transition bg-white rounded-full dot shadow-switch-1 dark:bg-gray-300 -top-1 h-6 w-6 peer-checked:translate-x-3 peer-checked:bg-white"
         ></div>
   </div>
</label>
</template>
<script setup>
// imports
import { computed, onMounted, reactive,ref } from "vue";



//definations
const props = defineProps({
    text: String, 
  id: String,
  active:Boolean
});
const emit = defineEmits(['toggled']);



/*--------------------------------------------------------------------*/
//variables
const checked=ref("false")

/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods
onMounted(() => { });

function handleToggle() {
    console.log("hm   ", checked.value)
    emit('toggled',checked.value)
}
/*--------------------------------------------------------------------*/
//watchers

/*--------------------------------------------------------------------*/

</script>
