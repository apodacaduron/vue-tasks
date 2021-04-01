<template lang="pug">
#login
  Nav(onlyLogo, :spaceBetween="false")
  .sized-box.df.df-center
    .form-container.df.df-center.df-direction-column
      input.input.input__border(placeholder="Correo electrónico")
      .mb-2
      input.input.input__border(placeholder="Contraseña", type="password")
      .mb-2
      .no-account.color-white
        | Aún no tienes cuenta? &nbsp;
        router-link(to="/sign-up") Haz click aquí
      .mb-2
      button.button.button__gradient-background.font-bold Iniciar Sesión
</template>

<script>
export default {
  components: {
    Nav: () => import("@/components/Nav/Nav")
  }
};
</script>

<style lang="sass" scoped>
@import '@/style/formComponents'
@import '@/style/layout'
@import '@/style/font'

#login
  height: 100vh
  width: 100%
  .sized-box
    height: 100%
    width: 100%
    .form-container
      max-width: 300px
</style>