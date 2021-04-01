<template lang="pug">
#login
  Nav(onlyLogo, :spaceBetween="false")
  .sized-box.df.df-center
    .form-container.df.df-center.df-direction-column
      h1.color-white Inicia Sesión
      .mb-2
      input.input.input__border.full-width(
        placeholder="Correo electrónico",
        v-model="form.email"
      )
      .error-msg(v-if="$v.form.email.$model && $v.form.email.$invalid") Un correo válido es requerido
      .mb-2
      input.input.input__border.full-width(
        placeholder="Contraseña",
        type="password",
        v-model.trim="form.password"
      )
      .error-msg(v-if="$v.form.password.$model && !$v.form.password.required") Contraseña es requerido
      .error-msg(v-if="$v.form.password.$model && !$v.form.password.minLength") La contraseña debe contener al menos 6 caracteres
      .mb-2
      .no-account.color-white.small-text
        | Aún no tienes cuenta? &nbsp;
        router-link.anchor(to="/sign-up") Haz click aquí
      .mb-2
      button.button.button__gradient-background.font-bold.full-width(
        :disabled="$v.form.$invalid"
      ) Inicia Sesión
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  components: {
    Nav: () => import("@/components/Nav/Nav")
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  data: () => ({
    form: {
      email: "",
      password: ""
    }
  })
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
      width: 100%
</style>