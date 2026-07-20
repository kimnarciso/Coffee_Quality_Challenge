<script setup>
import { useRoute } from "vue-router";
import HeaderView from "./views/HeaderView.vue";
import FooterView from "./views/FooterView.vue";
const route = useRoute();
</script>


<template>

  <HeaderView v-if="!route.meta.hideHeader" />

  <RouterView />

  <FooterView v-if="!route.meta.hideFooter"/>

</template>