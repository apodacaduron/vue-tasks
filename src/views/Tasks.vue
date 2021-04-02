<template lang="pug">
#tasks
  Nav
  .max-width.df.df-center.df-direction-column.m-auto
    .pending-container.df.df-center.df-direction-column.full-width
      TaskItem(
        :id="task.id",
        :title="task.title",
        :date="task.date",
        :checked="task.completed",
        @change="updateTask({ column: 'completed', value: true, task })",
        @delete="deleteTask(task)",
        v-for="(task, index) in tasks.filter((task) => !task.completed)",
        :key="task.id"
      )
    .mt-3
    .completed.df.df-center.df-direction-column.full-width
      TaskItem(
        :id="task.id",
        :title="task.title",
        :date="task.date",
        :checked="task.completed",
        @change="updateTask({ column: 'completed', value: false, task })",
        @delete="deleteTask(task)",
        v-for="(task, index) in tasks.filter((task) => task.completed)",
        :key="task.id"
      )
</template>

<script>
import Collapse from "vue-collapse";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Nav: () => import("@/components/Nav/Nav"),
    TaskItem: () => import("@/components/Tasks/TaskItem"),
    Collapse
  },
  computed: {
    ...mapGetters({
      tasks: "tasks/tasks",
      isLoading: "tasks/isLoading",
      user: "auth/user"
    })
  },
  async created() {
    if (this.tasks.length > 0 && this.tasks[0].userId !== this.user.id)
      await this.loadTasks();
  },
  methods: {
    ...mapActions({
      updateTask: "tasks/updateTask",
      loadTasks: "tasks/loadTasks",
      deleteTask: "tasks/deleteTask"
    })
  }
};
</script>

<style lang="sass" scoped>
@import '@/style/layout'
@import '@/style/font'

#tasks
  padding: 128px 16px 72px 16px
  box-sizing: border-box
</style>