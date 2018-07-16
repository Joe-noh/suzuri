<template>
  <div class="a">
    callback
  </div>
</template>

<script>
import { fetchAccessToken, loginAsSuzuriUser } from '~/lib/suzuri'

export default {
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    const accessToken = await fetchAccessToken(this.code)
    const user = await loginAsSuzuriUser(accessToken)
  },
}
</script>
