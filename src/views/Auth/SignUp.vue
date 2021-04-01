<template lang="pug">
#signup
  Nav(onlyLogo, :spaceBetween="false")
  .sized-box.df.df-center
    .form-container.df.df-center.df-direction-column
      input.input.input__border.full-width(placeholder="Nombre")
      .mb-2
      input.input.input__border.full-width(placeholder="Correo electrónico")
      .mb-2
      input.input.input__border.full-width(
        placeholder="Contraseña",
        type="password"
      )
      .mb-2
      input.input.input__border.full-width(
        placeholder="Confirmar contraseña",
        type="password"
      )
      .mb-2
      .no-account.color-white.small-text
        | Ya tienes una cuenta? &nbsp;
        router-link.anchor(to="/login") Haz click aquí
      .mb-2
      button.button.button__gradient-background.font-bold.full-width Crear cuenta
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

#signup
  height: 100vh
  width: 100%
  .sized-box
    height: 100%
    width: 100%
    .form-container
      max-width: 300px
      width: 100%
</style>