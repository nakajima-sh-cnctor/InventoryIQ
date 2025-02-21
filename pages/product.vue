<script setup lang="ts">
import { getProducts } from '~/utils/api/ProductAPI'
import type { Product } from '~/interfaces/ProductInterFace'

const product = ref<Product[]>([])

const headers = [
  { title: '商品ID', key: 'id' },
  { title: '商品名', key: 'name' },
  { title: '種類', key: 'category' },
  { title: '焙煎度', key: 'roast' },
  { title: '容量', key: 'volume' },
  { title: '価格', key: 'price' },
]

onMounted(async () => {
  product.value = await getProducts()
})
</script>

<template>
  <v-container>
    <h1>商品情報</h1>
    <v-row>
      <v-col
        cols="12"
      >
        <v-data-table
          :headers="headers"
          :items="product"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
