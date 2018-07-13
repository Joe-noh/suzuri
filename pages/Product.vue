<template lang="html">
  <s-product :product="product"/>
</template>

<script>
import SProduct from '~/components/molecules/SProduct.vue'

import items from '~/lib/item-master'
import { fetchProduct } from '~/lib/suzuri'

export default {
  components: {
    SProduct,
  },
  props: {
    userName: {
      type: String,
      required: true,
    },
    itemId: {
      type: String,
      required: true,
    },
  },
  async asyncData({ params }) {
    const product = await fetchProduct(params.itemId)

    return { product }
  },
  computed: {
    humanizeName() {
      const item = items.find(item => item.name === this.itemName)
      return item.humanizeName
    },
  },
}
</script>

<style lang="scss" scoped>
.titled-product-list {
  padding: 10px 0;
}
</style>
