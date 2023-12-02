<template>

  <div class="flex items-center mr-4 mb-[14px]">
    <input :id="props.id" type="radio" name="radio" class="hidden" 
    :value="props.text"
    :disabled="props.active"
    @click="handleFilter"
    />
   
    <label :for="props.id" class="flex items-center cursor-pointer text-zinc-800 text-sm">
     <span class="w-4 h-4 inline-block mr-2 border border-grey"></span>
     {{ props.text }}</label>
   </div>
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
const emit = defineEmits(['filteredByRadio']);



/*--------------------------------------------------------------------*/
//variables
const price=ref("")

/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods
onMounted(() => { });
function handleFilter(e) {
   //console.log("radio input  ",e.target.value)
    emit('filteredByRadio',e.target.value)
}
/*--------------------------------------------------------------------*/
//watchers

/*--------------------------------------------------------------------*/

</script>

<style scoped>
input[type="radio"] + label span {
  transition: background 0.2s, transform 0.2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span {
  transform: scale(1.2);
}

input[type="radio"]:checked + label span {
  background-color: rgb(229 229 229);
  box-shadow: 0px 0px 0px 2px white inset;
}
input[type="radio"]:checked:disabled +label span {
  background: white;
}
</style>
