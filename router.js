import Vue from 'vue'
import Router from 'vue-router'

import Top from '~/pages/Top.vue'
import ItemProducts from '~/pages/ItemProducts.vue'
import User from '~/pages/User.vue'
import Product from '~/pages/Product.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/', name: 'top', component: Top},
      {path: '/items/:itemName', name: 'item-products', component: ItemProducts, props: true},
      {path: '/:userName/:userId/', name: 'user', component: User, props: true},
      {path: '/:userName/:userId/:itemId/:itemName/:itemSize/:itemColor', name: 'product', component: Product, props: true},
    ]
  })
}
