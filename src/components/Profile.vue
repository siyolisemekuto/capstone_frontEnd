<template>
    <div  v-if="user" :user="user">
       <img :src="ProfileImage"/>
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
</style>