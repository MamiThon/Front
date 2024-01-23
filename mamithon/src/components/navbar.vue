<template>
    <div class="content-nav">
        <div class="content-image">
            <div class="container-center">
                <img src="../assets/001-des-poissons-2.png" alt="logo">
            </div>
        </div>
        <div class="content-title">
            <h3>Mamithon</h3>
        </div>
        <div class="content-button">
            <button class="btn Login" v-if="!isLoged" @click="login">Login</button>
            <button class="btn SignUp" v-if="!isLoged" @click="signup">Signup</button>
            <button class="btn Logout" v-if="isLoged" @click="logout">Logout</button>
        </div>
    </div>
</template>

<script>

export default {

    name: "navBar",
    data() {
        return {
            isLoged: JSON.parse(localStorage.getItem("isLogged")),
        };
    },

    watch: {
        '$route': function () {
            this.isLoged = JSON.parse(localStorage.getItem("isLogged"));
        }
    },

    methods: {
        login() {
            this.$router.push(`/login`)
        },
        signup() {
            this.$router.push(`/signup`)
        },
        logout() {
            localStorage.setItem("isLogged", false);
            localStorage.removeItem("token");
            this.isLoged = false;
            this.$router.push(`/`)
        },
    }

}

</script>

<style scoped>
.content-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--var-color6);
    height: 4rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 0 1rem;
}

.content-image {
    height: 3rem;
    width: 15rem;

}
.container-center {
    height: 3rem;
    width: 3rem;

}

.content-image img {
    height: 100%;
    width: 100%;
}



.content-title {
    height: 3rem;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-title h3 {
    position: relative;
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--var-color2);
}

.content-title h3::after {
    content: "Mamithon";
    display: inline;
    color: rgba(0, 0, 0, 0.353);
    font-size: 2.5rem;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    transform: translate(0.2rem, 0.2rem);
}

.content-button {
    height: 3rem;
    width: 15rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.btn {
    height: 3rem;
    width: 7rem;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

}
</style>