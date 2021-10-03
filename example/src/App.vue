<template>
  <div>
    Current State:
    <span v-if="isActive">active</span>
    <span v-else>inactive</span>
  </div>
  <button type="button" @click="toggleActive">Toggle state</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useToggle from 'vue-use-toggle';

export default defineComponent({
  setup() {
    const [isActive, toggleActive] = useToggle();

    //Expose both the value and the setter
    return {
      toggleActive,
      isActive,
    };
  },
});
</script>

<style></style>
