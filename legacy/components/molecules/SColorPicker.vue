<template>
  <div class="s-color-picker">
    <a class="s-color-picker__color"
      :class="{'s-color-picker__color--selected': color.name == colorName}"
      :style="{backgroundColor: color.rgb}"
      @click.prevent="emitChange(color)"
      href="#"
      v-for="color in colors" :key="color.id"></a>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      required: true,
    },
    colorName: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitChange(color) {
      this.$emit('change', color.name)
    },
  },
}
</script>

<style lang="scss">
@import '~assets/stylesheets/mixins/variables';

.s-color-picker {
  display: flex;
  flex-flow: row wrap;
  padding: 0;
}

.s-color-picker__color {
  width: 32px;
  height: 32px;
  margin: 2px;
  border: 3px solid rgba($graylight, .4);
  box-sizing: border-box;
  cursor: pointer;
}

.s-color-picker__color--selected {
  border: 5px solid $blue;
}
</style>
