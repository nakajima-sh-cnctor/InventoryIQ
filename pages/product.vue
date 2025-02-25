<script setup lang="ts">
import { getProducts } from '~/utils/api/ProductAPI'
import type { Product } from '~/interfaces/ProductInterFace'

const product = ref<Product[]>([])
const error = ref(false)
const loading = ref(false)
const search = ref('')

const headers = [
  { title: '商品ID', key: 'id' },
  { title: '商品名', key: 'name' },
  { title: '種類', key: 'category' },
  { title: '焙煎度', key: 'roast' },
  { title: '容量(g)', key: 'volume' },
  { title: '価格(円)', key: 'price' },
]

onMounted(async () => {
  loading.value = true
  try {
    product.value = await getProducts()
  }
  catch (err) {
    console.error('Failed to fetch products:', err)
    error.value = true
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <v-container>
    <h1 class="text-primary my-2">
      商品情報
    </h1>
    <v-text-field
      v-model="search"
      color="primary"
      class="my-4"
      label="Search"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      hide-details
      single-line
    />
    <v-alert
      v-if="error"
      class="my-4"
      type="error"
      title="エラー"
      text="商品情報の取得に失敗しました。"
    />
    <v-row>
      <v-col
        cols="12"
      >
        <v-data-table
          :headers="headers"
          :items="product"
          :loading="loading"
          :search="search"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
