<template lang="pug">
#tasks
  Nav
  .df.df-center.df-direction-column.full-width
    .new-task-container.df.df-center.df-direction-column.full-width
      NewTask
    .mt-3
    transition-group.pending-container.df.df-center.df-direction-column.full-width(
      name="list",
      tag="div"
    )
      TaskItem(
        :task="task",
        @change="updateTask({ column: 'completed', value: true, task })",
        @delete="deleteTask(task)",
        v-for="(task, index) in tasks.filter((task) => !task.completed)",
        :key="task.id"
      )
    .mt-3(v-if="tasks.filter((task) => !task.completed).length > 0")
    transition-group.completed.df.df-center.df-direction-column.full-width(
      name="list"
    )
      TaskItem(
        :task="task",
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
    NewTask: () => import("@/components/Tasks/NewTask"),
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
@import '@/style/formComponents'

#tasks
  padding: 128px 16px 72px 16px
  box-sizing: border-box
.absolute-bottom
  position: absolute
  bottom: 48px

.list-enter-active, .list-leave-active
  transition: all 0.6s

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
  opacity: 0
  transform: translateY(24px)
</style>