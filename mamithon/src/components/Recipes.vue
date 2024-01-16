<template>
    <div class="content-recipes">
        <h2 class="title-recipes">
            Recettes
        </h2>
        <div class="content-card-recettes">
            <div class="card">
                <h3> Nom de la recette</h3>
                <span class="info">
                    <p>Pour X personnes</p>
                    <p>Temps de prepartion : X-min</p>
                </span>
                <p class="Step">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat atque quo aperiam cupiditate reiciendis
                    enim eaque iste dolorum illum, ducimus ut voluptatem esse nihil sint voluptate dolores. Possimus,
                    molestiae molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque obcaecati
                    laudantium facere eos facilis labore porro, perferendis dolor eum consectetur fugiat. Incidunt
                    consequuntur temporibus adipisci sunt. Earum, dolore fugit.
                </p>
                <button>
                    Voir la recette
                </button>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: "lastRecipes",
    components: {
    },

};

</script>

<style scoped>
.content-recipes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: auto;
    border: 4px solid black; /* A SUPPRIMER (pour voir les separation) */
    /* background-color: fuchsia; */
}

.content-card-recettes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: auto;
    /* background-color: blue; */
    overflow-x: scroll;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 20rem;
    height: 30rem;
    /* background-color: green; */
    border-radius: 50px;
}

.info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: auto;
    /* background-color: yellow; */
}

.info p {
    font-size: 1rem;
}

.Step {
    /* background-color: red; */
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
}

button {
    border: none;
    outline: none;
    width: 11rem;
    height: 4rem;
    border-radius: 20px;
    /* background-color: var(--var-color3); */
    /* box-shadow: 0px 4px 4px 0px rgba(30, 64, 84, 0.55); */
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--var-color);
}
</style>