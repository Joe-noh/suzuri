<template lang="html">
  <div>
    <s-user-profile :user="user"/>
    <s-product-list :products="products"/>
  </div>
</template>

<script>
import SProductList from '~/components/molecules/SProductList.vue'
import SUserProfile from '~/components/organisms/SUserProfile.vue'

import { fetchUserProducts, fetchUser } from '~/lib/suzuri'

export default {
  components: {
    SProductList,
    SUserProfile,
  },
  props: {
    userName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      products: [],
      user: {},
    }
  },
  async asyncData({ params }) {
    const results = await Promise.all([
      await fetchUserProducts(params.userName),
      await fetchUser(params.userId),
    ])

    return { products: results[0], user: results[1] }
  },
  async mounted() {
    const results = await Promise.all([
      await fetchUserProducts(this.userName),
      await fetchUser(this.userId),
    ])

    this.products = results[0]
    this.user = results[1]
  },
}
</script>

<style lang="scss" scoped>
</style>
