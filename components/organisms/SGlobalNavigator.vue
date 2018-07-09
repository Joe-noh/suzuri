<template>
  <nav class="s-global-navigator">
    <ul class="list">
      <li v-for="item in items" class="list-item">
        <router-link class="list-item__link" :to="{name: 'item-products', params: { itemName: item.name }}">{{ item.humanizeName }}</router-link>
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
  padding: 0 5px;
}

.list-item {
  line-height: 40px;
  display: table-cell;
  white-space: nowrap;
  margin: 0 5px;
}

.list-item__link {
  text-decoration: none;
  font-size: 14px;
}
</style>
