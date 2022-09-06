<template>
  <div >
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{mood.rating}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{mood.date}}</h6>
    <p class="card-text">{{mood.notes}}</p>
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