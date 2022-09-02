<template>
  <div class="hello">
    <div class="container">
   <img :src="imgURL"/>
   <router-link :to="{name:'register'}" class="register">Register an account</router-link>
   <router-link :to="{name:'login'}" class="register">login to your account</router-link>
  </div>
  </div>   
</template>

<script>
export default {
   name:"HelloWorld",
   data () {
    return{
      imgURL: "https://i.postimg.cc/Hkcdkf6M/logo-removebg-preview.png"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  
}
</style>