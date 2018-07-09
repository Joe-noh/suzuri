<template>
  <section class="container">
    <s-pickup-list :pickups="pickups"/>
    <s-new-product-list :products="newProducts"/>
  </section>
</template>

<script>
import SPickupList from '~/components/organisms/SPickupList.vue'
import SNewProductList from '~/components/organisms/SNewProductList.vue'

import axios from 'axios'

export default {
  components: {
    SPickupList,
    SNewProductList,
  },
  data () {
    return {
      pickups: [],
      newProducts: [],
    }
  },
  async mounted() {
    this.pickups = await this.fetchPickups()
    this.newProducts = await this.fetchNewProducts()

    console.log(this.pickups);
    console.log(this.newProducts);
  },
  methods: {
    async fetchPickups() {
      const params = { userName: 'surisurikun', limit: 4 }
      const res = await axios.get('/api/v1/choices', { params })

      return res.data.choices
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
