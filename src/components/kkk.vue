<!-- src/components/kkk.vue -->

<template>
  <div>
    <p class="a">KKK</p>
    <p>{{ NKK }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      NKK: "NKK"
    };
  }
});
</script>

<style>
.a {
  color: #faf;
}
</style>


