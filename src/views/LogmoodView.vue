<template>
    <div v-if="user" class="container">
        <form @submit.prevent="logMood">
  <div class="mb-3">
    <label class="form-label">Rating</label>
    <input type="number" class="form-control" v-model="rating">
    <div  class="form-text">Rate your mood from 0-10.</div>
  </div>
  <div class="mb-3">
    <label class="form-label">Notes</label>
    <input type="textarea" class="form-control" v-model="notes">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</template>
<script>
export default {
    name:"logmood",
    data(){
    return {
      rating: "",
      notes: ""
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
    logMood() {
     this.$store.dispatch("logMood", {
        rating: this.rating,
        notes: this.notes,
        id:this.user.user_id,
        token:this.token
      })
    },

}
}
</script>
<style scoped>
    
    
</style>