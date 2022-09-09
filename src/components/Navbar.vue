<template>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  <i class="fa-solid fa-bars"></i>
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      <Profile/>
    </div>
    <div>
      <ul>
        <router-link class="dropdown-item active" :to="{name:'logmood'}">Log a mood</router-link>
        <router-link class="dropdown-item" :to="{name:'record'}">Mood Trend</router-link>
        <router-link class="dropdown-item" :to="{name:'about'}">How this app works</router-link>
      </ul>
    </div>
    <router-link class="nav-link" :to="{name:'editmood'}">Edit your mood</router-link>
      <br/>
    <a href="https://capstone-mood-tracker.herokuapp.com/users/${payload.id}/${payload.id}/view-all" 
            :file="file">download record in pdf</a>
          <br/>
    <button>Log Out</button>
  </div>
</div>
</template>

<script scoped>
import Profile from "../components/Profile.vue";
export default {
    name:"Navbar",
    components:{
    Profile,
}
}

</script>

<style scoped>
/* .offcanvas-body{
  width:70% !important;
} */
/* .offcanvas-body {
  height: 100%;
  width: 75%;
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
}    */

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
.btn-primary{
  position:fixed;
  top:5px;
  right:5px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav router-link {font-size: 18px;}
}
</style>