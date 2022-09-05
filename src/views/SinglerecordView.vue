<template>
    <div {{$route.params.id}}>
      <!-- <h1>this is a single record</h1>
      <p>this is the id {{$route.params.id}}</p>  -->
       <div v-if="mood">
        <h1>{{mood.rating}}</h1>
      </div>  
      <MoodRecord/>
    </div>
</template>
<script>
import MoodRecordVue from '@/components/MoodRecord.vue';
export default {
    name:"Singlerecord",
    components:"MoodRecord",
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