<template lang="html">
  <div>{{ itemId }}</div>
</template>

<script>
const items = {
  't-shirt': 1,
  'ringer-t-shirt': 19,
  'long-sleeve-t-shirt': 15,
  'full-graphic-t-shirt': 8,
  'sweat': 5,
  'hoodie': 9,
  'mug': 3,
  'towel-handkerchief': 14,
  'blanket': 13,
  'sticker': 11,
  'can-badge': 17,
  'note': 10,
  'smartphone-case': 4,
  'clear-smartphone-case': 18,
  'wallet-phone-case': 12,
  'tote-bag': 2,
  'sacoche': 16,
  'baby-rompers': 6,
  'baby-bib': 7,
}

export default {
  props: {
    itemName: {
      type: String,
      required: true,
    },
  },
  computed: {
    itemId() {
      return items[this.itemName]
    }
  }
}
</script>

<style lang="css">
</style>
