<template lang="html">
  <s-product-detail :product="product" :item-size="itemSize" :item-color="itemColor"/>
</template>

<script>
import SProductDetail from '~/components/organisms/SProductDetail.vue'

import items from '~/lib/item-master'
import { fetchProduct } from '~/lib/suzuri'

export default {
  components: {
    SProductDetail,
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
    itemName: {
      type: String,
      required: true,
    },
    itemSize: {
      type: String,
      required: true,
    },
    itemColor: {
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
