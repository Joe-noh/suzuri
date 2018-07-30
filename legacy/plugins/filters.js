import Vue from 'vue'

Vue.filter('comma', (val) => {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
})
