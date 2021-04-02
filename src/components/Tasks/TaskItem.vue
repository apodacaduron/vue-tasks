<template lang="pug">
.task-item.df.df-center.df-justify-start.light-background.border-radius
  label.pure-material-checkbox 
    input(type="checkbox", :checked="checked", @change="$emit('change')")
    span
  .text-container.full-width
    .title.color-white(
      :class="{ 'line-through': checked, 'color-gray': checked }"
    ) {{ title }}
    .completed-date.color-gray.small-text {{ parsedDate }}
  .remove-container
    button.button(@click="$emit('delete')")
      img(src="@/assets/x.svg")
</template>

<script>
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    }
  },
  computed: {
    parsedDate() {
      return this.date ? dayjs(this.date).format("LLL") : dayjs().format("LLL");
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/style/font'
@import '@/style/formComponents'
@import '@/style/layout'

.task-item
  max-width: 720px
  width: 100%
  margin-bottom: 16px
  padding: 16px
  box-sizing: border-box
  transition: 0.5s all ease-in-out
</style>