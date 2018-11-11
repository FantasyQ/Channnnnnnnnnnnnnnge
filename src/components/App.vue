<!-- src/components/App.vue -->

<template>
  <div>
    <div class="hello">
      Name: <input v-model="name" type="text">
      <say-hello :name="name" :initialEnthusiasm="5" />
    </div>
    <p>
      <router-link to="/ggg">Go to GGG</router-link>
      <router-link to="/kkk">Go to KKK</router-link>
      <!-- <router-link to="/ggg">Go to GGG</router-link>
      <router-link to="/kkk">Go to KKK</router-link> -->
    </p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import sayHello from "./sayHello.vue";
import gggVue from "./ggg.vue";
import kkkVue from "./kkk.vue";

const routes = [
  {
    path: '/ggg',
    component: gggVue
  },
  {
    path: '/kkk',
    component: kkkVue
  }
]

const router = new VueRouter({
  routes
});

export default Vue.extend({
  data() {
    return {
      name: 'Cool'
    }
  },
  components: {
    sayHello
  },
  router
});
</script>

<style>
  .hello {
    border: 1px solid #333;
  }
</style>


