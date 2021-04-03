<template lang="pug">
.new-task.df.df-center.df-justify-start.border.border-radius(
  @click="focusInput"
)
  .add-button-container
    button.button.button__gradient-background.button__sq.df.df-center(
      @click="newTask(taskText)"
    )
      img(src="@/assets/plus.svg")
  .text-container.full-width
    input.input.full-width(
      placeholder="Go and get apples to the supermarket",
      v-model="taskText",
      @keyup.enter="newTask(taskText)",
      ref="input"
    )
</template>

<script>
import { mapActions } from "vuex";
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
  data: () => ({
    taskText: ""
  }),
  computed: {
    parsedDate() {
      return this.date ? dayjs(this.date).format("LLL") : dayjs().format("LLL");
    }
  },
  methods: {
    ...mapActions({
      addTask: "tasks/addTask"
    }),
    focusInput() {
      this.$refs.input.focus();
    },
    newTask(text) {
      if (!text) return;
      this.addTask(text);
      this.taskText = "";
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/style/font'
@import '@/style/formComponents'
@import '@/style/layout'
@import '@/style/variables'

.new-task
  max-width: 720px
  width: 100%
  margin-bottom: 16px
  padding: 16px
  box-sizing: border-box
  transition: 0.5s all ease-in-out
</style>