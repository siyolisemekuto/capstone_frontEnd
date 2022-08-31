<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid collapse navbar-collapse">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars navbar-toggler-icon"></i>
                </button>
                <div class="navbar-nav">
                    <Profile/>
                    <router-link class="nav-link active" :to="{name:'logmood'}">Log a mood</router-link>
                    <router-link class="nav-link" :to="{name:'record'}">Mood Trend</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import Profile from "../components/Profile.vue";
export default {
    name:"Navbar",
    components:{
        Profile
    }
}

</script>
<style>
    .navbar-nav {
  margin:0;
  padding: 0;
  width: 60px;
}
   .nav-link{
    display:block;
   } 
   button{
    position:fixed;
    left:5px;
    top:5px;
   }
</style>