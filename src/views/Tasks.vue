<template lang="pug">
#tasks
  Nav
  .max-width.df.df-center.df-direction-column.m-auto
    .pending-container
      TaskItem(
        title="this is a title",
        date="2018",
        @change="print",
        v-for="(task, index) in tasks",
        :key="index"
      )
    .completed-container
      TaskItem
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {
    Nav: () => import("@/components/Nav/Nav"),
    TaskItem: () => import("@/components/Tasks/TaskItem")
  },
  computed: {
    ...mapGetters({
      tasks: "tasks/tasks"
    })
  },
  methods: {
    print(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="sass" scoped>
#tasks
  padding-top: 72px
</style>