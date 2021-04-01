<template lang="pug">
  #app
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
</style>
