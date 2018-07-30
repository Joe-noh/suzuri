<template >
  <div class="s-user-profile" :style="{ backgroundImage }">
    <div class="s-user-profile__main">
      <img class="s-user-profile__avatar" :src="user.avatarUrl">
      <h2 class="s-user-profile__name">{{ user.displayName }}</h2>
      <ul class="s-user-profile__identities">
        <li v-if="!!websiteUrl" class="s-user-profile__identities__identity">
          <i class="fa fa-link"/>
          <a :href="websiteUrl" target="_blank">Website</a>
        </li>
        <li v-if="!!twitterUrl" class="s-user-profile__identities__identity">
          <i class="fa fa-twitter"/>
          <a :href="twitterUrl" target="_blank">Twitter</a>
        </li>
        <li v-if="!!instagramUrl" class="s-user-profile__identities__identity">
          <i class="fa fa-instagram"/>
          <a :href="instagramUrl" target="_blank">Instagram</a>
        </li>
      </ul>
      <p class="s-user-profile__body">{{ user.profile.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    backgroundImage() {
      return `url(${this.user.profile.headerUrl})`
    },
    websiteUrl() {
      return this.user.profile.url
    },
    twitterUrl() {
      const twitter = this.user.identities.find(iden => iden.provider === "twitter")
      return twitter && twitter.url
    },
    instagramUrl() {
      const instagram = this.user.identities.find(iden => iden.provider === "instagram")
      return instagram && `https://www.instagram.com/${instagram.nickname}`
    }
  }
}
</script>

<style lang="scss">
@import "~assets/stylesheets/mixins/fonts";
@import "~assets/stylesheets/mixins/variables";

.s-user-profile {
  background-position: top center;
  background-size: auto 200px;
  background-repeat: no-repeat;
  padding-top: 152px;
  margin: 0 0 10px 0;
}

.s-user-profile__main {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 0 10px;
}

.s-user-profile__avatar {
  width: 96px;
  height: 96px;
  border: 5px solid $white;
  border-radius: 50%;
}

.s-user-profile__name {
  @include font-size(large);
  @include overflow-elipsis;

  color: $black;
  display: inline-block;
  margin: 5px 0 10px;
}

.s-user-profile__identities {
  @include font-size(normal);

  margin: 0 0 15px 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
}

.s-user-profile__identities__identity {
  color: $gray;
  margin-right: 10px;

  & > i {
    margin-right: 2px;
  }

  & > a {
    @include link-color($gray);
  }
}

.s-user-profile__body {
  @include font-size(normal);

  color: $black;
  white-space: pre-wrap;
}
</style>
