<template>
  <div class="s-new-product-list">
    <h2>新着</h2>
    <s-product-list :products="products"/>
  </div>
</template>

<script>
import SProductList from '~/components/molecules/SProductList.vue'

export default {
  components: {
    SProductList,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
