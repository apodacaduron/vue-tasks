<template lang="pug">
footer.df.df-center(:class="{ fixed: fixed }")
  .df.df-center
    .created-by.color-white Created by Daniel Apodaca
    .mr-2
    a(href="https://github.com/apodacaduron", target="_blank")
      img.fill-white(src="@/assets/github.svg")
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/style/layout'
@import '@/style/font'

footer
  width: 100%
  height: 72px

.fixed
  position: fixed
  bottom: 0
</style>