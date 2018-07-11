<template>
  <nav class="s-global-navigator">
    <ul class="list">
      <li v-for="item in items" class="list-item">
        <a class="list-item__link" :href="`/items/${item.name}`">{{ item.humanizeName }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import items from '~/lib/item-master'

export default {
  data() {
    return { items }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/stylesheets/mixins/variables';
@import '~assets/stylesheets/mixins/fonts';

.s-global-navigator {
  height: 40px;
  width: 100%;
  background-color: $white;
  border-bottom: solid 1px $graylight;
}

.list {
  list-style: none;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
  padding: 0;
}

.list-item {
  line-height: 40px;
  white-space: nowrap;
  margin: 0 7px;
}

.list-item__link {
  @include link-color($black);

  font-weight: bold;
  font-size: 14px;
}
</style>
