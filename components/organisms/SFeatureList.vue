<template>
  <div class="s-feature-list">
    <s-heading class="s-feature-list__heading">特集</s-heading>

    <div class="s-feature-list__choices">
      <s-choice class="s-feature-list__choices__choice" :choice="choice" v-for="choice in choices"/>
    </div>
  </div>
</template>

<script>
import SHeading from '~/components/atoms/SHeading.vue';
import SChoice from '~/components/molecules/SChoice.vue';

export default {
  components: {
    SHeading,
    SChoice,
  },
  props: {
    choices: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.s-feature-list__heading {
  text-align: center;
  margin-bottom: 10px;
}

.s-feature-list__choices {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
}

.s-feature-list__choices__choice {
  margin: 0 5px;
}
</style>
