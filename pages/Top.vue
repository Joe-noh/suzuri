<template>
  <section class="container">
    <s-feature-list :choices="features"/>
    <s-pickup-list :products="pickups"/>
    <s-new-product-list :products="newProducts"/>
  </section>
</template>

<script>
import SFeatureList from '~/components/organisms/SFeatureList.vue'
import SPickupList from '~/components/organisms/SPickupList.vue'
import SNewProductList from '~/components/organisms/SNewProductList.vue'

import { fetchFeatures, fetchPickups, fetchNewProducts } from '~/lib/suzuri'

export default {
  components: {
    SFeatureList,
    SPickupList,
    SNewProductList,
  },
  data () {
    return {
      newProducts: [],
    }
  },
  async asyncData(context) {
    const results = await Promise.all([fetchFeatures(), fetchPickups()])

    return {
      features: results[0],
      pickups: results[1],
    }
  },
  async mounted() {
    this.newProducts = await fetchNewProducts()
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 10px;
}
</style>
