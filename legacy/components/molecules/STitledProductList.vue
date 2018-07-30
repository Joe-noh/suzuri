<template>
  <div class="s-title-product-list">
    <s-heading class="heading">{{ title }}</s-heading>
    <s-product-list :products="products"/>
  </div>
</template>

<script>
import SHeading from '~/components/atoms/SHeading.vue'
import SProductList from '~/components/molecules/SProductList.vue'

export default {
  components: {
    SHeading,
    SProductList,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="css">
.heading {
  text-align: center;
  margin-bottom: 10px;
}
</style>
