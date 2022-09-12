<template>
  <div @click="viewMood">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{mood.rating}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{mood.date}}</h6>
    <p class="card-text">{{mood.notes}}</p>
  <router-link :to="{name:'singleview', params: {id:mood.id}}" class="cards">single view</router-link>
    <router-link :to="{name:'editmood', params: {id:mood.id}}" class="cards">edit mood</router-link>
  </div>
</div> 
</div>
</template>
<script>
export default {
    name:"MoodRecord",
    props:["mood"]
}
</script>
<style>
  
</style>