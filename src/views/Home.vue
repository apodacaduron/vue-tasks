<template lang="pug">
#home
  Nav(transparent)
  .header.df.df-center.df-direction-column.m-auto
    h1.color-white Tasks, just tasks.
    .mb-1
    p.color-white Keep track of the daily tasks in life and get that satisfaction upon completion.
    .mb-3
    router-link.button.button__gradient-background.font-bold(to="/login") Get Started
    .mb-4
</template>

<script>
export default {
  components: {
    Nav: () => import("@/components/Nav/Nav.vue")
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
    max-width: 300px
    height: 100vh
</style>