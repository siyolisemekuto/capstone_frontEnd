<template>
<nav >
    <button @click="openNav=!openNav"><i class="fa-solid fa-bars"></i></button>
    <div v-if="openNav">
        <div id="mySidenav" class="sidenav">
            <Profile/>
            <router-link class="nav-link active" :to="{name:'logmood'}">Log a mood</router-link>
            <router-link class="nav-link" :to="{name:'record'}">Mood Trend</router-link>
            <router-link class="nav-link" :to="{name:'about'}">How this app works</router-link>
            <a href="https://capstone-mood-tracker.herokuapp.com/users/${payload.id}/${payload.id}/view-all" 
            :file="file">download record in pdf</a>
        </div>
    </div>
</nav>
</template>

<script>
import Profile from "../components/Profile.vue";
export default {
    name:"Navbar",
    components:{
        Profile
    },
    data(){
        return{
        openNav:false
        }
    }
}

</script>

<style>
 
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color:  #2B8682;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  transition: width 3s;
  transition-timing-function:ease-out;
}   

.sidenav router-link {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav router-link:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
} 

#mySidenav{
    width:50vw;
}


@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav router-link {font-size: 18px;}
}
</style>