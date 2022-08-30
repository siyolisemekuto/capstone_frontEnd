<template>
    <div>
      <h1>this is a single record</h1>
      <p>this is the id {{$route.params.id}}</p> 
      <div v-if="mood">
        <h1>{{mood.rating}}</h1>
      </div> 
    </div>
</template>
<script>
export default {
    props:['id'],
    data(){
        return{
            property:null
        }
    }
    // mounted(){
    //   fetch('http://localhost:3000/properties' + this.id)
    //   .then((res)=> res.json())
    //   .then((data)=>(this.properties=data))
    //   .catch(err => console.log (err.message))
    // }
    
}
</script>
<style>
    
</style>