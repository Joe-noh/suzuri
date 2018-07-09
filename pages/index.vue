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

import axios from 'axios'

export default {
  components: {
    SFeatureList,
    SPickupList,
    SNewProductList,
  },
  data () {
    return {
      features: [],
      pickups: [],
      newProducts: [],
    }
  },
  async mounted() {
    this.features = await this.fetchFeatures()
    this.pickups = await this.fetchPickups()
    this.newProducts = await this.fetchNewProducts()

    console.log(this.features)
    console.log(this.pickups)
    console.log(this.newProducts)
  },
  methods: {
    async fetchFeatures() {
      const params = { userName: 'surisurikun', limit: 4 }
      const res = await axios.get('/api/v1/choices', { params })

      return res.data.choices
    },
    async fetchPickups() {
      const res = await axios.get('/api/v1/users/7/favorites')
      const pickups = res.data.favorites.map(fav => fav.product)

      return pickups
    },
    async fetchNewProducts() {
      const res = await axios.get('/api/v1/products')

      return res.data.products
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
