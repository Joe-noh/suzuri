<template lang="html">
  <s-product-list :products="products"/>
</template>

<script>
import SProductList from '~/components/molecules/SProductList.vue'

import { fetchItemProducts } from '~/lib/suzuri'

export default {
  components: {
    SProductList,
  },
  props: {
    itemName: {
      type: String,
      required: true,
    },
  },
  async asyncData({ params }) {
    const products = await fetchItemProducts(params.itemName)

    return { products }
  }
}
</script>

<style lang="scss" scoped>
</style>
