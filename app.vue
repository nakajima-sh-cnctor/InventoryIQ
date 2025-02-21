<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import { getProducts } from '~/api/ProductAPI'

onMounted(async () => {
  const products = await getProducts()
  console.log(products)
})
</script>
