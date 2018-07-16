<template>
  <header class="s-global-header">
    <h1 class="s-global-header__logo">
      <a class="s-global-header__logo__link" href="/">LOGO</a>
    </h1>
    <a :href="oauthUrl">Login</a>
  </header>
</template>

<script>
export default {
  computed: {
    oauthUrl() {
      const clientId = process.env.SUZURI_CLIENT_ID
      const redirectUri = encodeURIComponent(process.env.SUZURI_REDIRECT_URI)
      const scope = "read write"
      const responseType = "code"
      
      const query = [
        `client_id=${clientId}`,
        `redirect_uri=${redirectUri}`,
        `scope=${scope}`,
        `response_type=${responseType}`,
      ].join('&')

      return `https://suzuri.jp/oauth/authorize?${query}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/stylesheets/mixins/variables';
@import '~assets/stylesheets/mixins/fonts';

.s-global-header {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 52px;
  width: 100%;
  background-color: $white;
  border-bottom: solid 1px $graylight;
}

.s-global-header__logo {
  @include font-size(huge);

  font-weight: bold;
  margin-left: 10px;
}

.s-global-header__logo__link {
  @include link-color($black);
}
</style>
