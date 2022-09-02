<template>
  <div class="hello">
    <div class="container">
   <img :src="imgURL"/>
   <div class="links">
   <router-link :to="{name:'register'}" class="register">Register an account</router-link>
   <router-link :to="{name:'login'}" class="register">login to your account</router-link>
  </div>
</div>
  </div>   
</template>

<script>
export default {
   name:"HelloWorld",
   data () {
    return{
      imgURL: "https://i.postimg.cc/3xwf5cXD/logo-removebg-preview-1.png"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container img{
  height:50%;
  width:50%;
}
.register{
  display:block
}
</style>