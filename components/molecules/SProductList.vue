<template>
  <div class="s-product-list">
    <div v-for="product in products">
      {{ product.title }}
    </div>
  </div>
</template>

<script>
export default {
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
