<template>
    <div class="container">
    <h1>Log in to your account.</h1>
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
  methods: {
    editProfile() {
      return this.$store.dispatch("editUser", {
        name: this.name,
        email: this.email
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
  }
</style>