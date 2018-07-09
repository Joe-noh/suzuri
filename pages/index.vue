<template>
  <section class="container">
    <s-pickup-list :pickups="pickups"/>
  </section>
</template>

<script>
import SPickupList from '~/components/organisms/SPickupList.vue'
import axios from 'axios'

export default {
  components: {
    SPickupList,
  },
  data () {
    return {
      pickups: [],
    }
  },
  async mounted() {
    this.pickups = await this.fetchPickups()
    console.log(this.pickups);
  },
  methods: {
    async fetchPickups() {
      const params = { userName: 'surisurikun', limit: 4 }
      const res = await axios.get('/api/v1/choices', { params })

      return res.data.choices
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
