<template>
    <div>
        <h2>
            Mamithon
        </h2>
        <form action="submit">
            <input type="text" name="mail" id="mail" placeholder="mail">
            <input type="text" name="username" id="username" placeholder="Username">
            <input type="password" name="password" id="password" placeholder="Password">
            <input type="submit" value="signup">
        </form>
        <button @click="login">ce connecter</button>
    </div>
</template>

<script>

export default {
    name: "blocSignup",
    components: {
    },
    methods: {
        login() {
            this.$router.push(`/login`)
        }
    }
};

</script>


<style scoped>
</style>