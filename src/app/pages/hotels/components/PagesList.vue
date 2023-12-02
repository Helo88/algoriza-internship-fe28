<template>
  <div>
    <ul>
      <li
        class="py-[9px] w-[41px] rounded-md shadow text-sm text-neutral-400"
        @click="handlePre"
      >
        <img
          src="/icons/searchForm/arrow-down1.svg "
          class="transform rotate-90 inline-block"
          alt="arrow"
        />
      </li>
      <li
        @click="handleRequestPage(n)"
        class="py-[9px] w-[41px] rounded-md shadow text-sm"
        :class="{
          'bg-blue-500 rounded-md border-b-2 border-blue-500 text-white ':
            clicked == n,
          'text-neutral-400 bg-white': clicked != n,
        }"
        v-for="n in paginationArray"
        :key="n"
      >
        {{ n }}
      </li>
      <li @click="null" class="py-[9px] w-[41px] text-neutral-400">...</li>
      <li
        @click="handleRequestPage(props.total)"
        class="py-[9px] w-[41px] rounded-md shadow text-sm"
        :class="{
          'bg-blue-500 rounded-md border-b-2 border-blue-500 text-white ':
            clicked == props.total,
          'text-neutral-400 bg-white': clicked != props.total,
        }"
      >
        {{ props.total }}
      </li>
      <li
        class="py-[9px] w-[41px] rounded-md shadow text-sm text-neutral-400"
        @click="handleNext"
      >
        <img
          src="/icons/searchForm/arrow-down1.svg "
          id="right"
          class="-rotate-90 inline-block"
          alt="arrow"
        />
      </li>
    </ul>
  </div>
</template>
<script setup>
// imports
import { computed, onMounted, ref } from "vue";

/*--------------------------------------------------------------------*/
//definations
const props = defineProps({
  total: Number,
});
const emit = defineEmits(["selectPage"]);

/*--------------------------------------------------------------------*/
//variables

const lowerLimit = ref(1);
const upperLimit = ref(3);
const clicked = ref(0);
/*--------------------------------------------------------------------*/
//computed
const paginationArray = computed(() => {
  let l = lowerLimit.value;
  let m = upperLimit.value;
  let arr = [];
  for (let i = l; i <= m; i++) {
    arr.push(i);
  }

  return arr;
});
/*--------------------------------------------------------------------*/
//methods
onMounted(() => {});
function handlePre() {
  if (lowerLimit.value == 1) return;
  else {
    lowerLimit.value = lowerLimit.value - 1;
    upperLimit.value = upperLimit.value - 1;
  }
  // console.log("lower ",upperLimit.value,lowerLimit.value)
}
function handleNext() {
  if (upperLimit.value == props.total) return;
  else {
    upperLimit.value = upperLimit.value + 1;
    lowerLimit.value = lowerLimit.value + 1;
    // console.log(upperLimit.value,lowerLimit.value)
  }
}
function handleRequestPage(pageNumber) {
  clicked.value = pageNumber;
  emit("selectPage", pageNumber);
}
/*--------------------------------------------------------------------*/
//watchers

/*--------------------------------------------------------------------*/
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>
li {
  display: inline-block;
  cursor: pointer;
}
</style>
