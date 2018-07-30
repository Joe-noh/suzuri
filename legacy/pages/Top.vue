<template>
  <section class="container">
    <s-feature-list class="feature-list" :choices="features"/>
    <s-pickup-list class="pickup-list" :products="pickups"/>
    <s-new-product-list class="new-product-list" :products="newProducts"/>
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
.container {}

.feature-list {
  margin-top: 20px;
}

.pickup-list {
  margin-top: 30px;
}

.new-product-list {
  margin-top: 30px;
}
</style>
