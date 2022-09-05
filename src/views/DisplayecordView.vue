<template>
   {{mood}}
    <div>
       your record 
    </div>
</template>
<script>
export default {
   name:"Record" ,
   computed:{
      mood(){
         return this.$store.state.mood
      }
   }
}
</script>
<style scoped>
    
</style>