<template>
  <div
    class="py-[12px] pl-[12px] text-xs font-normal outline-none rounded flex justify-between items-center gap-x-[6px] flex-1 border border-neutral-200"
  >
    <input
      :disabled="!props.active"
      class="w-3/4 focus:outline-none"
      type="number"
      :placeholder="props.placeholder"
      @change="handleBudgetInput"
    />
    <!-- <input
      type="checkbox"
      class="h-5 w-5 border-green-300 border"
      :disabled="!props.active"
      v-model="checkedBudget"
      @click="handleBudgetInputState"
    /> -->
  </div>
</template>
<script setup>
// imports
import { computed, onMounted, ref } from "vue";

/*--------------------------------------------------------------------*/
//definations
const props = defineProps({
  placeholder: String,
  active: Boolean,
});
const emit = defineEmits(["filteredByInput", ""]);

/*--------------------------------------------------------------------*/
//variables
const checkedBudget = ref(false)
/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods
function handleBudgetInput(e) {
  emit("filteredByInput", e.target.value);
}
// function handleBudgetInputState() {
//     //console.log("check ",checkedBudget.value)
//   emit("filteredByInputStatus", checkedBudget.value);
// }

/*--------------------------------------------------------------------*/
//watchers

/*--------------------------------------------------------------------*/
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  display: none;
}
</style>



