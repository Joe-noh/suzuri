<template>
  <div class="s-pickup-list">
    <div v-for="pickup in pickups">
      {{ pickup.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pickups: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
