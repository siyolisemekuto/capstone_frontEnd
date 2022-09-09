<template>
    <div class="container">
    <h1>Edit your profile.</h1>
    <form @submit.prevent="editUser">
        <input v-model="name" type="name" name="name" id="name" class="form-control" placeholder="Name"
         required  >
        <input v-model="email" type="email" name="email" id="email" class="form-control" 
        placeholder="email" >
      <button type="submit" class="btn">Edit</button>
    </form> 
    </div>
</template>
<script>
export default {
    data(){
    return {
      name: "",
      email: ""
    }
  },
  computed:{
  user(){
    return this.$store.state.user
  },
  token(){
    return this.$store.state.token
  }
},
  methods: {
    editUser() {
      return this.$store.dispatch("editUser", {
        name: this.name,
        email: this.email,
        id:this.user.id
      })
    },
}
}

</script>
<style scoped>
  .container{
    display:flex;
    flex-direction: column;
    text-align: center;
    background: linear-gradient(rgba(0, 0, 0, 0.45));
  }
</style>