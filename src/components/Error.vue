<template>
  <div
    class="py-[5px] px-5 text-[13px] bg-red-500 text-white  min-w-max absolute -left-2 -bottom-[40px] z-30"
    >{{ props.text }}</div>
</template>

<script setup>
const props = defineProps({
  text: String,
});
</script>
