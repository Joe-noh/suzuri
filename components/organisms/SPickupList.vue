<template>
  <div class="s-pickup-list">
    <h2>ピックアップ</h2>
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
