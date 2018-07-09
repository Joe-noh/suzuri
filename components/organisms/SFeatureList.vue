<template>
  <div class="s-feature-list">
    <h2>特集</h2>

    <div v-for="choice in choices">
      {{ choice.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    choices: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
