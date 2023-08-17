<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <dev>
    <h1>Hello, {{ data?.hello }}</h1>
  </dev>
</template>