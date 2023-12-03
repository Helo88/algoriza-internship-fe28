<template>
  <div class="2xl:max-w-[1240px] h-[200px]" :class="{'bg-gradient-to-b from-blue-700 to-blue-800' :isHotelsPage}">
    <NavBar></NavBar>
    <router-view> </router-view>

   

    <Footer></Footer>
  </div>
</template>

<script setup>
// imports
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Warning from "../../components/Warning.vue";
import SearchHotelsForm from "../pages/SearchForm/SearchHotelsForm.vue";
/*--------------------------------------------------------------------*/
//variables
const currentRoute = useRoute();
/*--------------------------------------------------------------------*/
//computed
const isHotelsPage = computed(() => {
  return ["hotels"].includes(currentRoute.name);
});
/*--------------------------------------------------------------------*/
//methods

/*--------------------------------------------------------------------*/
//watchers

/*--------------------------------------------------------------------*/
//definations
const { props, attrs } = defineProps({});
const emit = defineEmits(["", ""]);

// used with script setup and setup only cos children stuff r private in them while in options Api No
defineExpose({});

/*--------------------------------------------------------------------*/
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
