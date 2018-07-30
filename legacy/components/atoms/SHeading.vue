<template>
  <h2 class="s-heading"><slot/></h2>
</template>

<style lang="scss" scoped>
@import "~assets/stylesheets/mixins/variables";
@import "~assets/stylesheets/mixins/fonts";

.s-heading {
  @include font-size(huge);

  color: $black;
}
</style>
