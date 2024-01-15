<template>
    <div>
        <h2>
            Mamithon
        </h2>
        <form action="submit">
            <input type="text" name="mail" id="mail" placeholder="mail">
            <input type="password" name="password" id="password" placeholder="Password">
            <input type="submit" value="Login">
        </form>
        <button @click="signup">Sign Up</button>
    </div>
</template>

<script>  



export default {
    name: "blocLogin",
    components: {
    },


    methods: {
        signup() {
            this.$router.push(`/signup`)
        }
    }
};



</script>

<style scoped>
</style>