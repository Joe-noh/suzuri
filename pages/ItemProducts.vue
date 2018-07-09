<template lang="html">
  <div>{{ itemId }}</div>
</template>

<script>
import items from '~/lib/item-master'

export default {
  props: {
    itemName: {
      type: String,
      required: true,
    },
  },
  computed: {
    itemId() {
      const item = items.find(item => item.name === this.itemName)
      return item.id
    }
  }
}
</script>

<style lang="css">
</style>
