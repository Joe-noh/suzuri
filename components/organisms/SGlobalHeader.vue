<template>
  <header class="s-global-header">
    <h1 class="s-global-header__logo">
      <a class="s-global-header__logo__link" href="/">LOGO</a>
    </h1>
    <div class="s-global-header__auth">
      <template v-if="user">
        <img class="s-global-header__auth__avatar" @click="isMenuShown = !isMenuShown" :src="user.avatarUrl" :alt="user.name">
        <ul class="s-global-header__auth__menu" v-if="isMenuShown">
          <li class="s-global-header__auth__menu__item" @click="logout">
            <a class="s-global-header__auth__menu__item-link" href="#">Logout</a>
          </li>
        </ul>
      </template>
      <template v-else>
        <a class="s-global-header__auth__login" :href="oauthUrl">LOGIN</a>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    user: {
      required: false,
    },
  },
  data() {
    return {
      isMenuShown: false,
    }
  },
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
  },
  methods: {
    logout() {
      localStorage.removeItem("currentUser")
      location.href = "/auth/logout"
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/stylesheets/mixins/variables';
@import '~assets/stylesheets/mixins/fonts';

.s-global-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
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

.s-global-header__auth {
  margin-right: 10px;
}

.s-global-header__auth__login {
  @include link-color($black);
}

.s-global-header__auth__avatar {
  height: 32px;
  width: 32px;
  border-radius: 50%;
}

.s-global-header__auth__menu {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 48px;
  right: 10px;
  list-style: none;
  min-width: 100px;
  background-color: $white;
  box-shadow: 0 0 4px rgba($black, .5);
}

.s-global-header__auth__menu__item {
  width: 100%;
  height: 32px;
  line-height: 32px;
}

.s-global-header__auth__menu__item-link {
  @include link-color($black);

  display: inline-block;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  background-color: $white;
}
</style>
