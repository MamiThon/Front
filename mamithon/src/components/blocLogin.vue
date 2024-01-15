<template>
    <div class="content-input">
        <h2 class="title-Login">
            Mamithon
        </h2>
        <form action="submit" class="form-input">
            <input type="text" name="mail" id="mail" v-model="email" placeholder="Email">
            <input type="password" name="password" id="password" v-model="password" placeholder="Password">
            <input type="submit" value="Login" class="btn-Login">
        </form>
        <button class="redirect-signup" @click="signup">Créé un compte</button>
    </div>
</template>

<script>
import { login } from "@/services/authService";


export default {
    name: "blocLogin",
    components: {
        email,
        password,
        idUser: "",
    },


    methods: {
        signup() {
            this.$router.push(`/signup`)
        },

        submitForm() {
            login(this.email, this.password).then(({ token, idUser }) => {
                if (!token) {
                    console.log("No token received");
                    return;
                } else {
                    this.isLoggedIn = true;
                    this.name = name;
                    localStorage.setItem("idUser", idUser);
                    console.log("Received idUser:", idUser);
                    console.log("Received token:", token);
                    this.$router.push(`/`);
                }
            });
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
    height: 30rem;
    border-radius: 50px;
    padding: 1.5rem 0 0 0;
    box-shadow: 0px 4px 4px 0px rgba(30, 64, 84, 0.55);

}

.form-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60%;
    width: 85%;

    /* background-color: fuchsia; */
}

#mail,
#password {
    height: 4rem;
    width: 80%;
    border-radius: 20px;
    border: none;
    outline: none;
    padding-left: 1.5rem;
    font-size: 1.3rem;
}

.title-Login {
    font-size: 3rem;
}

.btn-Login {
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

.btn-Login:hover {
    box-shadow: inset 0px 0px 0px 2px var(--var-color5);
    cursor: pointer;
}

.redirect-signup {
    border: none;
    outline: none;
    background-color: transparent;
    color: #343434;
}

.redirect-signup:hover {
    text-decoration: underline;
    cursor: pointer;
}








/* height width heigth width */
</style>