<template lang="pug">
.task-item
  input(type="checkbox", :value="value", @change="$emit('change', !value)")
  .title {{ title }}
  .completed-date {{ date }}
</template>

<script>
export default {
  props: {
    value: {
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
  }
};
</script>