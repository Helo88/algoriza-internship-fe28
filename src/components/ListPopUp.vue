<template>
    <ul
      class="w-[206px] border border-neutral-300 rounded-[10px] shadow bg-white absolute left-[12px] -bottom-[128px]"
      >
      <li class="p-[10px] border-b-[1px] border-zinc-100 last:border-b-0 text-center
       text-neutral-600 text-[13px] font-normal cursor-pointer hover:bg-zinc-100" 
       v-if="!data || data.length==0">No cities available</li>
      <li v-for="[key,value] in data" :key="key"
       class="p-[10px] border-b-[1px] border-zinc-100 last:border-b-0 text-center text-neutral-600 text-[13px] font-normal cursor-pointer hover:bg-zinc-100"
       @click='handleCityInput(key,value)'>
    {{ key}}  
    </li> 

    </ul>
  
</template>

<script setup>
// imports
import {computed, onMounted, reactive, ref, watch, watchEffect } from "vue";

/*--------------------------------------------------------------------*/
//variables

/*--------------------------------------------------------------------*/
//definations
const emit = defineEmits(["handle-city-input"]);
const props = defineProps({
  data: Map,
});

/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods
onMounted(() => {
    console.log("my data of cities", props);
 
});
function handleCityInput(city, id) {
  console.log("selected");
  emit("handle-city-input", city, id);
}

/*--------------------------------------------------------------------*/
//watchers

// used with script setup and setup only cos children stuff r private in them while in options Api No
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
