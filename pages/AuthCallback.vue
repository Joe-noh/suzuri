<template>
  <div class="a">
    callback
  </div>
</template>

<script>
import { loginAsSuzuriUser } from '~/lib/suzuri'

export default {
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    const user = await loginAsSuzuriUser(this.code)

    // store user info into localStorage
  },
}
</script>
