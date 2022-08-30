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
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
:root{
  --main-bg-color:var(#D3EAE8);
  --accent:var(#2B8682);
  --nav-color:var(#6495ED)
}

nav {
  padding: 30px;
}

nav a.router-link-exact-active {
  color:#2B8682;
}
</style>
