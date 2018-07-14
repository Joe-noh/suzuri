<template>
  <a class="s-choice" :href="choiceUrl">
    <span class="s-choice__title">{{ choice.title }}</span>
  </a>
</template>

<script>
export default {
  props: {
    choice: {
      type: Object,
      required: true,
    },
  },
  computed: {
    choiceUrl() {
      return [
        '',
        this.choice.user.name,
        'omoide',
        this.choice.id,
      ].join('/')
    }
  },
}
</script>

<style lang="scss">
@import "~assets/stylesheets/mixins/variables";
@import "~assets/stylesheets/mixins/fonts";

.s-choice {
  min-width: 300px;
  height: 100px;
  border-radius: 5px;
  background-color: rgba($graylight, .5);
}

.s-choice__title {
  @include font-size(normal);

  color: $black;
  font-weight: bold;
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 5px;
}
</style>
