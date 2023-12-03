<template>
  <ul
    class="w-[206px] border border-neutral-300 rounded-[10px] shadow bg-white"
  >
    <li
      v-for="item in data"
      :key="item[0]"
      class="p-[10px] border-b-[1px] border-zinc-100 last:border-b-0 text-center
       text-neutral-600 text-[13px] font-normal cursor-pointer hover:bg-zinc-100 flex gap-x-[10px]"
      @click="handleInput(item[2])"
    >
      <img :src="`/images/${item[1]}`"  alt="icon image" />
      <span>{{ item[0] }}</span>
    </li>
  </ul>
</template>

<script setup>
// imports
import { computed, onMounted, ref } from "vue";
/*--------------------------------------------------------------------*/
//definations
const emit = defineEmits(["user-dropdown-selected"]);
const props = defineProps({
  data: Object,
});

/*--------------------------------------------------------------------*/
//variables

const data = props.data;
/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods
onMounted(() => {
  //console.log("drop down menu", data);
});
function handleInput(input) {
  // console.log("selected input ",input);
  emit("user-dropdown-selected", input);
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
