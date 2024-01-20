<template>

    <div class="content-pages">
    <blocSignup/>
    </div>
</template>


<script>
import blocSignup from '@/components/blocSignup.vue';

export default {
    name: "signupPage",
    components: {
        blocSignup
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