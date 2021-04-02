<template lang="pug">
#home.full-width
  Nav(transparent)
  .header.df.df-center.df-direction-column.full-width
    h1.color-white Tasks, just tasks.
    .mb-1
    p.color-white Keep track of the daily tasks in life and get that satisfaction upon completion.
    .mb-3
    router-link.button.button__gradient-background.button__padding.font-bold(
      :to="isAuthenticated ? '/tasks' : '/login'"
    ) Get Started
    .mb-4
  Footer(fixed)
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    Nav: () => import("@/components/Nav/Nav.vue"),
    Footer: () => import("@/components/Footer/Footer.vue")
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated"
    })
  }
};
</script>

<style lang="sass" scoped>
@import '@/style/formComponents'
@import '@/style/layout'
@import '@/style/font'

#home
  background: url('../assets/bg.jpg') no-repeat center / cover
  .header
    height: 100vh
    text-align: center
    p
      max-width: 300px
</style>