<template lang="pug">
nav#nav.df.df-center(:class="backgroundStyle")
  .df.df-center.max-width(:class="{ 'df-space-between': spaceBetween }")
    router-link.logo(to="/") Tasks.
    .actions(v-if="!onlyLogo")
      router-link.button(to="/login") Login
      router-link.button.button__border(to="/sign-up") Sign Up
</template>

<script>
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
    backgroundStyle() {
      return {
        "transparent-bg": this.transparent,
        "dark-bg": !this.transparent
      };
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/style/variables'
@import '@/style/layout'
@import '@/style/formComponents'

nav#nav
  width: 100%
  height: 72px
  padding: 0 20px
  box-sizing: border-box
  position: fixed
  .logo
    font-weight: bold
    font-size: 1.6rem
    color: $white
    text-decoration: none

.transparent-bg
  background: transparent
.dark-bg
  background: $lightBg
</style>