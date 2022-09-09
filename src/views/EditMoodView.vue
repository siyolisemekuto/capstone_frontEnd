<template>
    <div class="container">
    <h1>Edit your Mood.</h1>
    <form @submit.prevent="editMood">
        <input v-model="rating" type="number" name="rating" id="rating" class="form-control" placeholder="New rating"
         required  >
        <input v-model="notes" type="text" name="notes" id="notes" class="form-control" 
        placeholder="notes" >
      <button type="submit" class="btn">Edit Mood</button>
    </form> 
    </div>
</template>
<script>
export default {
    data(){
    return {
      rating: "",
      notes: ""
    }
  },
  computed:{
  mood(){
    return this.$store.state.mood
  },
  token(){
    return this.$store.state.token
  }
},
  methods: {
    editMood() {
      return this.$store.dispatch("editMood", {
        rating: this.rating,
        notes: this.notes,
        id:this.mood.mood_id
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