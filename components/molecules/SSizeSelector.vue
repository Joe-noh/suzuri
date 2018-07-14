<template>
  <select class="s-size-selector" @change="emitChange">
    <option class="s-size-selector__option"
      :value="size.name"
      :selected="size.name == sizeName"
      v-for="size in sizes" :key="size.id">{{ size.name.toUpperCase() }}</option>
  </select>
</template>

<script>
export default {
  props: {
    sizes: {
      type: Array,
      required: true,
    },
    sizeName: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitChange(event) {
      this.$emit('change', event.target.value)
    },
  },
}
</script>

<style lang="scss">
@import '~assets/stylesheets/mixins/fonts';
@import '~assets/stylesheets/mixins/variables';

.s-size-selector {
  @include font-size(large);

  display: block;
  padding: 4px;
  background-color: $white;
}
</style>
