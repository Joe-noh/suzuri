<template>
  <div>
    <s-global-header :user="user"/>
    <s-global-navigator/>
    <nuxt/>
  </div>
</template>

<script>
import SGlobalHeader from '~/components/organisms/SGlobalHeader.vue'
import SGlobalNavigator from '~/components/organisms/SGlobalNavigator.vue'

import { fetchCurrentUser } from '~/lib/suzuri'

export default {
  components: {
    SGlobalHeader,
    SGlobalNavigator,
  },
  data() {
    return {
      user: null,
    }
  },
  async mounted() {
    const currentUser = localStorage.getItem("currentUser")
    console.log(currentUser)

    if (currentUser) {
      this.user = JSON.parse(currentUser)
    } else {
      try {
        this.user = await fetchCurrentUser()
        localStorage.setItem("currentUser", JSON.stringify(this.user))
      } catch(e) {
        // do nothing
      }
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
