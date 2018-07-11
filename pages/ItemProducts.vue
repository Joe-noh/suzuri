<template lang="html">
  <s-titled-product-list class="titled-product-list" :title="humanizeName" :products="products"/>
</template>

<script>
import STitledProductList from '~/components/molecules/STitledProductList.vue'

import items from '~/lib/item-master'
import { fetchItemProducts } from '~/lib/suzuri'

export default {
  components: {
    STitledProductList,
  },
  props: {
    itemName: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      products: [],
    }
  },
  computed: {
    humanizeName() {
      const item = items.find(item => item.name === this.itemName)
      return item.humanizeName
    },
  },
  async mounted() {
    this.products = await fetchItemProducts(this.itemName)
  },
}
</script>

<style lang="scss" scoped>
.titled-product-list {
  padding: 10px 0;
}
</style>
