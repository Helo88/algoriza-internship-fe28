<template>
 <div class="max-w-[400px] bg-white rounded-md ">
<img class="w-full  h-[180px]" alt="room image" src="/images/hotel/Rectangle70.png"/>
<div class='mt-4 px-5 mb-6 '>
    <h3 class="mb-[12px] text-zinc-900 text-lg font-medium">Standard twin ben, Multiple beds</h3>
    <ul class="flex flex-col gap-y-[8px] mb-5">
        <li>
            <BagIcon color="#828282"/>
            <span>300 sqt feet</span>
        </li>
        <li>
        <BoolIcon color="#828282" />
        <span>Sleeps 3</span>
        </li>
        <li>
            <LikeIcon color="#828282" />
            <span>Standard twin ben, Multiple beds</span>
        </li>
        </ul>
        <CustomButton class="w-full"  text="Reserve suite" @click="$emit('reserved')"/>
</div>


 </div>
</template>
<script setup>
import LikeIcon from '../../../../components/svgs/LikeIcon.vue'
import BoolIcon from '../../../../components/svgs/BoolIcon.vue';
import BagIcon from '../../../../components/svgs/BagIcon.vue'
import CustomButton from '../../../../components/CustomButton.vue';

const emit = defineEmits(["reserved"]);
</script>
<style scoped>
li{
    display: flex;
    gap:10px;
    font-weight: 400;
    font-size: 14px;
}
</style>