<template>
    <div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}

:root{
  --var-color: #1B4965;
  --var-color2: #EEF9FF;
  --var-color3: #7DCAF9;
  /* ###### Declinaison de couleur ###### */

  --var-color4: #1E4054;
  --var-color5: #2D5E7D;
  --var-color6: #3C7DA6;
  --var-color7: #57B7F2;
}



html, body {
  font-family: 'Poppins', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Jua', sans-serif;
  color: #343434;
}

#app {
  font-family: 'Poppins', sans-serif;
}


body {
  height: 100vh;
  width : 100%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  overflow-x:hidden ;
  background-color: var(--var-color2);
}





</style>