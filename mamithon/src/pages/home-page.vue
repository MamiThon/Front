<template>
    <div class="content-pages">
        <Recipes />
    </div>
</template>
    
    
<script>
import Recipes from '@/components/Recipes.vue';


export default {
    name: "homePage",
    components: {
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