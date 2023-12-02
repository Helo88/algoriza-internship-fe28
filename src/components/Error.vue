<template>
  <span
    class="py-1 px-5 text-[13px] bg-red-600 text-white rounded-[10px] w-full absolute left-3 -bottom-[40px]"
    >{{ props.text }}</span
  >
</template>

<script setup>
const props = defineProps({
  text: String,
});
</script>
