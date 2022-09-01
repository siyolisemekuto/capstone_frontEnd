<template>
    <div  v-if="user" :user="user">
       <img :src="user.image" alt="Avatar" class="avatar"/>
       <ul>
        <li>Name:{{user.name}}</li>
        <li>Email:{{user.email}}</li>
       </ul>
    </div>
</template>
<script>
export default {
    name:"Profile",
    computed: {
        user() {
        return this.$store.state.user;
        }
    },
    //     mounted() {
    //     this.$store.dispatch("fetchUser");
    // }
}
</script>
<style>
   ul{
    list-style: none;
   } 
   .avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>