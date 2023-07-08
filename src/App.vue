<template>
  <div>
    <routerView></routerView>
        <!-- <router-link to="/SignIn">Перейти на вторую страницу</router-link> -->

  </div>
</template>

<script>
//import FooterG from './components/general/FooterG.vue';
//import HeaderG from './components/general/HeaderG.vue';
//import MainHome from './components/MainHome.vue';
  import {RouterView} from 'vue-router';


export default {
  name: "App",
  components: {
    RouterView
  },
  data(){
    return {
    }
  }
};
</script>

<style>
@font-face {
    font-family: 'Inconsolata', monospace;
    font-family: 'Rubik', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@800&family=Rubik:wght@500&display=swap');
}
#app {
  font-family: 'Rubik', sans-serif;
}
a{
color: #560d61;
text-decoration: none;
}
main{
    background-image: url(./assets/gemachLogo.jpg);
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
}
</style>
