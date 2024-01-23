<template>
    <div class="content-pages">
        <h1>Cree un ingredient</h1>
      <CreateIngredient />
    </div>
  </template>
  
  <script>
  import CreateIngredient from '@/components/CreateIngredient.vue';
  
  export default {
    name: "create-ingredient",
    components: {
      CreateIngredient
  
      },
    methods: {},
  };
  </script>
  
  <style scoped>
  .content-pages {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
  </style>
  