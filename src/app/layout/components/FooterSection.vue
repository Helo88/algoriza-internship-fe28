<template>
  <div class="">
    <h4 class="text-black text-base font-meduim mb-2 md:mb-5">{{ props.label }}</h4>
    <ul>
      <li
        class="text-neutral-600 text-sm font-normal mb-2"
        v-for="item in props.items"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
    <button v-if="props.more" class="text-blue-500 text-sm font-normal">
      See more
    </button>
  </div>
</template>

<script setup>
// imports
import { onMounted } from "vue";
//definations
const props = defineProps({ label: String, items: Array, more: String });
onMounted(() => {
//  console.log(props);
});

/*--------------------------------------------------------------------*/
/*--------------------------------------------------------------------*/
//variables

/*--------------------------------------------------------------------*/
//computed

/*--------------------------------------------------------------------*/
//methods

/*--------------------------------------------------------------------*/
//watchers

/*--------------------------------------------------------------------*/
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
