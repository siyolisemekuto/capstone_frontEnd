<template>
    <div>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <Profile/>
            <router-link class="nav-link active" :to="{name:'logmood'}">Log a mood</router-link>
            <router-link class="nav-link" :to="{name:'record'}">Mood Trend</router-link>
            <router-link class="nav-link" :to="{name:'about'}">How this app works</router-link>
            <a href="https://capstone-mood-tracker.herokuapp.com/users/${payload.id}/${payload.id}/view-all" 
            :file="file">download record in pdf</a>
        </div>
        <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
    </div>
</template>
<script>
import Profile from "../components/Profile.vue";
export default {
    name:"Navbar",
    components:{
        Profile
    },
    method:{
         openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
    },

        closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
}

</script>
<style>
    /* .navbar-nav {
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
   .navbar{
	position:fixed;
	display:flex;
	flex-flow:column;
	width:5%;
	min-height:328px;	
	height:80%;
	background-color: #2B8682;
	-webkit-transition: width 1s;
	z-index:1;
	float:left;
	overflow:hidden;
    }
.navbar:hover{
	width: 70%;
    }
nav ul li a {
    position: relative;
    left:0;
    }
nav ul li a::after {
    content: '';
    width: 0;
    height: 3px;
    background: #6495ED;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.5s;
}
nav ul li a:hover::after{
    width: 100%;
}
.router-link-exact-active {
  color: #6495ED !important;
}  */
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
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

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>