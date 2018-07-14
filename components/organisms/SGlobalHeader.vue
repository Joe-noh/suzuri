<template>
  <header class="s-global-header">
    <h1 class="s-global-header__logo">
      <a class="s-global-header__logo__link" href="/">LOGO</a>
    </h1>
  </header>
</template>

<style lang="scss" scoped>
@import '~assets/stylesheets/mixins/variables';
@import '~assets/stylesheets/mixins/fonts';

.s-global-header {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 52px;
  width: 100%;
  background-color: $white;
  border-bottom: solid 1px $graylight;
}

.s-global-header__logo {
  @include font-size(huge);

  font-weight: bold;
  margin-left: 10px;
}

.s-global-header__logo__link {
  @include link-color($black);
}
</style>
