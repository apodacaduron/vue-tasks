<template lang="pug">
#app
  notifications
  transition(name="fade")
    router-view
</template>

<style lang="sass">
@import "@/style/variables"
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap')

*
  margin: 0
  padding: 0

#app
  font-family: 'Nunito sans', Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background: $darkBg
  width: 100%
  min-height: 100vh

.fade-enter-active, .fade-leave-active
  transition: opacity .2s
  position: absolute

.fade-enter, .fade-leave-to
  opacity: 0
</style>
