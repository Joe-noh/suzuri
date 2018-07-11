<template>
  <div class="s-new-product-list">
    <s-titled-product-list title="新着" :products="products"/>
  </div>
</template>

<script>
import STitledProductList from '~/components/molecules/STitledProductList.vue'

export default {
  components: {
    STitledProductList,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
}
</script>
