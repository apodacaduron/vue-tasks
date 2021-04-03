<template lang="pug">
.task-item.df.df-center.df-justify-start.light-background.border-radius
  label.pure-material-checkbox 
    input(
      type="checkbox",
      :checked="task.completed",
      @change="$emit('change')"
    )
    span
  .text-container.full-width
    button.custom-button.title.color-white(
      :class="{ 'line-through': task.checked, 'color-gray': task.checked }",
      v-if="!isEditable",
      @click="toggleInput"
    ) {{ task.title }}
    input.input.input__editable.color-white.full-width(
      v-if="isEditable",
      :value="task.title",
      @keyup.enter="taskTitleUpdate",
      @blur="toggleInput",
      ref="editableInput"
    )
    .completed-date.color-gray.small-text {{ parsedDate }}
  .remove-container
    button.button(@click="$emit('delete')")
      img(src="@/assets/x.svg")
</template>

<script>
import { mapActions } from "vuex";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

export default {
  props: {
    task: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    isEditable: false
  }),
  computed: {
    parsedDate() {
      return this.task.date
        ? dayjs(this.task.date).format("LLL")
        : dayjs().format("LLL");
    }
  },
  methods: {
    ...mapActions({
      updateTask: "tasks/updateTask"
    }),
    toggleInput() {
      this.isEditable = !this.isEditable;
      if (this.isEditable)
        this.$nextTick(() => this.$refs.editableInput.focus());
    },
    taskTitleUpdate(e) {
      this.updateTask({
        column: "title",
        value: e.target.value,
        task: this.task,
        delay: 0
      });
      this.toggleInput();
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

.custom-button
  background: none
  color: $white
  border: none
  font: inherit
  cursor: pointer
  text-decoration: none
  text-align: left
</style>