import items from '~/lib/item-master'
import client from './client'

export async function fetchFeatures() {
  const params = { userName: 'surisurikun', limit: 4 }
  const res = await client.get('/api/v1/choices', { params })

  return res.data.choices
}

export async function fetchPickups() {
  const res = await client.get('/api/v1/users/7/favorites')
  const pickups = res.data.favorites.map(fav => fav.product)

  return pickups
}

export async function fetchNewProducts() {
  const res = await client.get('/api/v1/products')

  return res.data.products
}

export async function fetchItemProducts(itemName) {
  const item = items.find(item => item.name === itemName)
  const params = { itemId: item.id }
  const res = await client.get('/api/v1/products', { params })

  return res.data.products
}

export async function fetchProduct(id) {
  const res = await client.get(`/api/v1/products/${id}`)

  return res.data.product
}

export async function fetchCurrentUser(code) {
  const res = await client.get('/auth/user')

  return res.data.user
}
