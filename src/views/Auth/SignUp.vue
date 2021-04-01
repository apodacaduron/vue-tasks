<template lang="pug">
#signup
  Nav(onlyLogo, :spaceBetween="false")
  .sized-box.df.df-center
    .form-container.df.df-center.df-direction-column
      h1.color-white Regístrate
      .mb-2
      input.input.input__border.full-width(
        placeholder="Nombre",
        v-model.trim="form.name"
      )
      .error-msg(v-if="$v.form.name.$model && $v.form.name.$invalid") Nombre es requerido
      .mb-2
      input.input.input__border.full-width(
        placeholder="Correo electrónico",
        v-model.trim="form.email"
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
      input.input.input__border.full-width(
        placeholder="Confirmar contraseña",
        type="password",
        v-model.trim="form.confirmPassword"
      )
      .error-msg(
        v-if="$v.form.confirmPassword.$model && $v.form.confirmPassword.$invalid"
      ) Las contraseñas no coinciden
      .mb-2
      .no-account.color-white.small-text
        | Ya tienes una cuenta? &nbsp;
        router-link.anchor(to="/login") Haz click aquí
      .mb-2
      button.button.button__gradient-background.font-bold.full-width(
        :disabled="$v.form.$invalid"
      ) Crear cuenta
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  components: {
    Nav: () => import("@/components/Nav/Nav")
  },
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAsPassword: sameAs("password")
      }
    }
  },
  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })
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