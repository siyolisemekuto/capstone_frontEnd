<template>
   <div container>
   
   <MoodRecord v-for="mood in moods" :key="mood.id" :mood="mood"/>    
       
    </div>
</template>


<script>
import MoodRecord from '../components/MoodRecord.vue';
export default {
    name: "Record",
    components: { MoodRecord },
    computed: {
        moods() {
            return this.$store.state.mood;
        },
        user(){
            return this.$store.state.user
        },
        token(){
            return this.$store.state.token
        }
        
    },
    mounted() {
       this.Moodshower(this.user.user_id);
    },
    methods:{
        Moodshower(id){
            this.$store.dispatch("showRecord",{
            id:id,
            token:this.token
        });
        }
    }
}
</script>


<style scoped>
    
</style>