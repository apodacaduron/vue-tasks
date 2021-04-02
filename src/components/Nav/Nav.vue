<template lang="pug">
nav#nav.df.df-center(:class="backgroundStyle")
  .df.df-center.max-width.full-width(
    :class="{ 'df-space-between': spaceBetween }"
  )
    router-link.logo(to="/") Tasks.
    .actions(v-if="!onlyLogo && !isAuthenticated")
      router-link.button(to="/login") Login
      router-link.button.button__border(to="/sign-up") Sign Up
    .actions(v-if="!onlyLogo && isAuthenticated")
      button.button.text-align-right(@click="logoutAccount")
        .name {{ user && user.name }}
        .log-out.color-gray Log out
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
    onlyLogo: {
      type: Boolean,
      default: false
    },
    spaceBetween: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated",
      user: "auth/user"
    }),
    backgroundStyle() {
      return {
        "transparent-bg": this.transparent,
        "dark-bg": !this.transparent,
        "nav-shadow": !this.transparent
      };
    }
  },
  methods: {
    ...mapActions({
      logout: "auth/logout"
    }),
    logoutAccount() {
      this.logout();
      this.$router.push("/");
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/style/variables'
@import '@/style/layout'
@import '@/style/formComponents'
@import '@/style/font'

nav#nav
  width: 100%
  height: 72px
  padding: 0 20px
  box-sizing: border-box
  position: fixed
  top: 0
  left: 0
  z-index: 9
  .logo
    font-weight: bold
    font-size: 1.6rem
    color: $white
    text-decoration: none

.transparent-bg
  background: transparent
.dark-bg
  background: $lightBg
.nav-shadow
  -webkit-box-shadow: 0px 8px 8px 0px rgba($darkBg,0.3)
  -moz-box-shadow: 0px 8px 8px 0px rgba($darkBg,0.3)
  box-shadow: 0px 8px 8px 0px rgba($darkBg,0.3)
</style>