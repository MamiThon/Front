<template>
    <div class="content-pages">
        <blocLogin />
    </div>
</template>


<script>

import blocLogin from "../components/blocLogin.vue"

export default {
    name: "loginPage",
    components: {
        blocLogin,
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