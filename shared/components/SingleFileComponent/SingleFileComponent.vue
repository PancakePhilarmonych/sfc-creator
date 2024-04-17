<script setup>
import { defineAsyncComponent } from "vue";
import { componentLoader } from "./business";
const dynamicComponent = defineAsyncComponent(() => componentLoader());
</script>

<template>
  <component :is="dynamicComponent"></component>
</template>
