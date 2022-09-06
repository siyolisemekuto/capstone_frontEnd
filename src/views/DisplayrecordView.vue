<template>
   <div>
   {{mood}}
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
            return this.$store.state.moods;
        },
        
    },
    mounted() {
        this.$store.dispatch("showRecord");
    },
}
</script>
<style scoped>
    
</style>