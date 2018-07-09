import Vue from 'vue'
import Router from 'vue-router'

import Top from '~/pages/Top.vue'
import ItemProducts from '~/pages/ItemProducts.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/', name: 'top', component: Top},
      {path: '/items/:itemName', name: 'item-products', component: ItemProducts, props: true},
    ]
  })
}
