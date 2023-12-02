<template>
<button type="submit" class=" h-10 px-[18px] py-2 bg-blue-500
rounded-md border border-blue-500 justify-center items-center gap-2.5 inline-flex">
    <span class="text-white text-[17px] font-medium "
    :class="props.custom"
    >{{ props.text }}</span>
</button>
</template>

<script setup>
import { onMounted} from "vue";


const props= defineProps({
  text: String,
  custom:String
});
// onMounted(()=>{console.log(props)})

</script>

