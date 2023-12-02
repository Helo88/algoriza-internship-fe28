<template>
  <div
    class=" h-[26px] px-2 py-1 rounded-md"
    :class="props.bg"
  >
    <div class="text-white text-[13px] font-medium">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
/*--------------------------------------------------------------------*/
//definations
const props = defineProps({
    bg:String
});
</script>
