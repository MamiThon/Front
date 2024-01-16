<template>
    <div class="content-input">
        <h2 class="title-Signup">
            Mamithon
        </h2>
        <form @submit.prevent="submitForm" class="form-input">
            <input type="text" name="mail" id="mail" v-model="email" placeholder="Email">
            <input type="text" name="username" id="username" v-model="username" placeholder="Username">
            <input type="password" name="password" id="password" v-model="password" placeholder="Password">
            <input type="submit" value="signup" class="btn-SignUp">
        </form>
        <button class="redirect-login" @click="login">ce connecter</button>
    </div>
</template>

<script>
import { newUser } from "@/services/newUserService";

export default {
    name: "blocSignup",
    data() {
        return {
            email: "",
            password: "",
            username: "",
        };
    },
    methods: {
        login() {
            this.$router.push(`/login`)
        },
        submitForm() {
            newUser(this.username, this.email, this.password).then(
                ({ token, username }) => {
                    console.log("juste apres le then",this.username, this.email, this.password);
                    if (token) {
                        this.username = username;
                        console.log("Received token:", token);
                        console.log("Received name:", username);
                        this.$router.push("/").catch((err) => {
                            console.log(err);
                        });
                    } else {
                        console.log("No token received");
                    }
                }
            );
        },
    }
};

</script>


<style scoped>
.content-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: auto;
    width: auto;
    background-color: var(--var-color3);
    width: 25rem;
    height: 35rem;
    border-radius: 50px;
    padding: 1.5rem 0 0 0;
    box-shadow: 0px 4px 4px 0px rgba(30, 64, 84, 0.55);

}

.form-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 70%;
    width: 85%;

    /* background-color: fuchsia; */
}

#mail,
#password,
#username {
    height: 4rem;
    width: 80%;
    border-radius: 20px;
    border: none;
    outline: none;
    padding-left: 1.5rem;
    font-size: 1.3rem;
}

.title-Signup {
    font-size: 3rem;
}

.btn-SignUp {
    border: none;
    outline: none;
    width: 11rem;
    height: 4rem;
    border-radius: 20px;
    background-color: var(--var-color6);
    color: var(--var-color2);
    font-size: 1.6rem;
    box-shadow: 0px 0px 3px 1px var(--var-color5);
}

.btn-SignUp:hover {
    box-shadow: inset 0px 0px 0px 2px var(--var-color5);
    cursor: pointer;
}

.redirect-login {
    border: none;
    outline: none;
    background-color: transparent;
    color: #343434;
}

.redirect-login:hover {
    text-decoration: underline;
    cursor: pointer;
}
</style>