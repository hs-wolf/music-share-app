<script setup lang="ts">
const props = defineProps({
  text: String,
});
</script>

<template>
  <button class="py-2 px-4 bg-green-500 text-white rounded">{{ text }}</button>
</template>
