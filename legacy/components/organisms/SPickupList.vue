<template>
  <div class="s-pickup-list">
    <s-titled-product-list title="ピックアップ" :products="products"/>
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
