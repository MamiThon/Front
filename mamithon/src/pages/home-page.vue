<template>
  <navbar />
  <div>
    <h1>home</h1>
  </div>
  <div class="content-pages">
    <Recipes />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue"
import Recipes from '@/components/Recipes.vue';


export default {


    name: "homePage",
    components: {
        navbar,
        Recipes,

    },
};
</script>

<style>
.content-pages {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>
