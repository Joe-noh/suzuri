<template>
  <p>{{ message }}</p>
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
  data() {
    return {
      message: "",
    }
  },
  async mounted() {
    try {
      const user = await loginAsSuzuriUser(this.code)

      localStorage.setItem("currentUser", JSON.stringify(user))
      location.href = "/"
    } catch(e) {
      this.message = e.message
    }
  },
}
</script>
