<template lang="pug">
#app
  transition(name="fade")
    router-view
</template>

<style lang="sass">
@import "@/style/variables"

*
  margin: 0
  padding: 0

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background: $darkBg
  width: 100%
  height: 100vh

.fade-enter-active, .fade-leave-active
  transition: opacity .2s
  position: absolute

.fade-enter, .fade-leave-to
  opacity: 0
</style>
