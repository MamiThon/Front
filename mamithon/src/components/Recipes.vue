<template>
  <div class="content-recipes">
    <span class="container-title">
      <h3 class="title-recipes">Recettes</h3>
    </span>
    <div class="content-card-recettes">
      <div class="card">
        <h3>Nom de la recette</h3>
        <span class="info">
          <p>Pour X personnes</p>
          <p>Temps de prepartion : X-min</p>
        </span>
        <p class="Step">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat atque
          quo aperiam cupiditate reiciendis enim eaque iste dolorum illum,
          ducimus ut voluptatem esse nihil sint voluptate dolores. Possimus,
          molestiae molestias! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi doloremque obcaecati laudantium facere eos
          facilis labore porro, perferendis dolor eum consectetur fugiat.
          Incidunt consequuntur temporibus adipisci sunt. Earum, dolore fugit.
        </p>
        <button>Voir la recette</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lastRecipes",
  components: {},
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
}

.container-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: auto;
  margin-top: 2rem;
  position: relative;
}

.title-recipes {
  text-align: center;
  font-size: 2.3rem;
  font-weight: bold;
  color: var(--var-color8);
  width: 10rem;
}

.title-recipes::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 0.5rem;
  background-color: var(--var-color7);
  border-radius: 20px;
  left: 0;
}

.content-card-recettes {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: auto;
  padding: 2rem 0rem 2rem 0rem;
  overflow-x: scroll;
  box-shadow: inset 0px 0px 2px 1px rgba(30, 64, 84, 0.55),
    0px 0px 4px 1px rgba(30, 64, 84, 0.55);
  margin-top: 1rem;
}

::-webkit-scrollbar {
  height: 0.5rem;
  width: 0.5rem;
  background-color: transparent;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--var-color7);
  border-radius: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 35rem;
  height: 25rem;
  background-color: var(--var-color3);
  border-radius: 50px;
  box-shadow: inset 0px 0px 2px 1px rgba(30, 64, 84, 0.55),
    0px 0px 4px 1px rgba(30, 64, 84, 0.55);
}

.card h3 {
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--var-color8);
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: auto;
}

.info p {
  font-size: 1rem;
}

.Step {
  background-color: var(--var-color7);
  border-radius: 20px;
  text-align: justify;
  padding: 1rem 1rem 0 1rem;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 7; /* Le nombre de lignes que vous voulez afficher */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: pre-line;
  text-overflow: ellipsis;
  max-width: 80%;
  height: auto;
  box-shadow: inset 0px 0px 4px 0px rgba(30, 64, 84, 0.55),
    0px 0px 4px 1px rgba(30, 64, 84, 0.55);
}

button {
  border: none;
  outline: none;
  width: 11rem;
  height: 4rem;
  border-radius: 20px;
  background-color: var(--var-color7);
  box-shadow: 0px 0px 4px 1px rgba(30, 64, 84, 0.55);
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--var-color);
}

button:hover {
  cursor: pointer;
  box-shadow: inset 0px 0px 4px 1px rgba(30, 64, 84, 0.55);
}

</style>
