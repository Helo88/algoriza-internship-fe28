<template>
  <div
    class="w-full bg-white rounded-[5px] border border-neutral-200 p-5 flex flex-col gap-y-5 justify-center items-center lg:flex-row  lg:gap-x-5 mb-6 last:mb-0"
  >
    <img
      :src="getImageSrc"
      alt="hortel photo"
      class="w-[285px] max-w-[285px] h-[200px] rounded-[5px]"
      loading="lazy"
    />
    <div class="h-auto lg:max-h[200px] flex-1 flex flex-col justify-between">
      <!--  -->
      <div class="flex flex-col gap-y-4  lg:flex-row  justify-between ">
        <!--  -->
        <div class="">
          <h3
            class="text-zinc-900 text-xl font-medium max-w-[380px] line-clamp-1"
            :title="hotel.property.name"
          >
            {{ hotel.property.name }}
          </h3>
          <div class="flex justify-start items-center mt-[10px]">
            <StarIcon  v-for="n in getRate" :key="n"/>

            <span class="px-2 text-neutral-600 text-sm font-normal"
              >{{ getRate }}
            </span>
            <span class="text-neutral-600 text-sm font-normal"
              >({{ hotel.property.reviewCount }} Reviews)</span
            >
          </div>
        </div>

        <!--  -->
        <Badge  class="" v-show="getBadge !== ' '" bg="bg-rose-500">{{ getBadge }}</Badge>
      </div>
      <!--  -->
      <div class="w-full flex flex-col  gap-y-2  lg:flex-row justify-between mt-[17px]">
        <p
          class="max-w-[380px] text-neutral-600 text-[13px] font-normal line-clamp-3"
        >
          {{ hotel.accessibilityLabel }}
        </p>
        <Badge v-show="getTax !== ' '" class="w-[60px] bg-green-600 mt-2 px-2  self-end lg:self-auto"
          >{{ getTax }}% off</Badge
        >
      </div>
      <div class="flex justify-between items-end  mt-[14px]">
        <CustomButton
          @click="handleViewHotel"
          class="w-max"
          text="See availablity"
        ></CustomButton>
        <div class="text-right">
          <span
            class="line-through text-rose-500 text-sm font-meduim pr-2"
            v-show="getStrikethroughtPrice !== ' '"
            >${{ getStrikethroughtPrice }}</span
          >
          <span
            v-show="getGrossPrice !== ' '"
            class="text-right after:content-['includes_taxes_and_fees'] text-xl font-medium after:font-light after:text-sm after:text-zinc-800 after:block"
            >${{ getGrossPrice }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
//components
import Badge from "../../../../components/Badge.vue";
import CustomButton from "../../../../components/CustomButton.vue";
import StarIcon from "../../../../components/svgs/StarIcon.vue";
/*--------------------------------------------------------------------*/
//definations
const props = defineProps({
  hotel: Object,
});
const emit = defineEmits(["", ""]);
const hotel = props.hotel;
/*--------------------------------------------------------------------*/
//variables
const currentRoute = useRoute();
const router = useRouter();
/*--------------------------------------------------------------------*/
//computed
const getImageSrc = computed(() => {
  return hotel.property.photoUrls?.[0] ? hotel.property.photoUrls?.[0] : " ";
});
const getGrossPrice = computed(() => {
  return hotel.property.priceBreakdown?.grossPrice
    ? hotel.property.priceBreakdown.grossPrice.value
    : " ";
});
const getStrikethroughtPrice = computed(() => {
  return hotel.property.priceBreakdown?.strikethroughPrice
    ? hotel.property.priceBreakdown.strikethroughPrice.value
    : " ";
});
const getBadge = computed(() => {
  return hotel.property.priceBreakdown?.benefitBadges?.[0]
    ? hotel.property.priceBreakdown.benefitBadges[0].identifier
    : " ";
});
const getRate = computed(() => {
  return Math.round(Number(hotel.property.reviewScore) / 2);
});
const getTax = computed(() => {
  let x = 0;
  if (getStrikethroughtPrice.value && getGrossPrice.value) {
    try {
      x =
        Number(hotel.property.priceBreakdown.strikethroughPrice.value) -
        Number(hotel.property.priceBreakdown.grossPrice.value);

      x = Math.round(
        (x / Number(hotel.property.priceBreakdown.strikethroughPrice.value)) *
          100
      );
    } catch (e) {
      x = " ";
    }
  }

  return x;
});
/*--------------------------------------------------------------------*/
//methods
function handleViewHotel() {
  router.push({ path: `hotel/${hotel.property.id}/${getRate.value}/${hotel.property.reviewCount}`  });
}
/*--------------------------------------------------------------------*/
//watchers

/*--------------------------------------------------------------------*/
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
