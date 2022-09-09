<template>
  <div v-if="user">
  <Navbar/>
  </div>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
    components: { 
      Navbar,
      Footer 
    },
    computed:{
      user(){
        return this.$store.state.user
      }
    },
    
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

#app {
  font-family:'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url("https://i.postimg.cc/xd0hB520/olena-ivanova-u-KVs2ov-R0-KY-unsplash.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
:root{
  --main-bg-color:var(#D3EAE8);
  --nav-color:var(#2B8682);
  --accent:var(#6495ED);
}

nav {
  padding: 30px;
}

nav a.router-link-exact-active {
  color:#2B8682;
}
</style>
