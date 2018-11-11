<!-- src/components/ggg.vue -->

<template>
  <div>
    <p class="a">GGG</p>
    <p>{{ HaLuKI }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      HaLuKI: "HaLuKI"
    };
  }
});
</script>

<style>
.a {
  color: #aaf;
}
</style>


