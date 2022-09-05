<template>
   <div>
   {{mood}}
   <MoodRecord v-for="mood in moods" :key="mood.id" :mood="mood"/>    
       
    </div>
</template>
<script>
import MoodRecord from '@/components/MoodRecord.vue';
export default {
    name: "Record",
    components: { MoodRecord },
    computed: {
        // mood() {
        //     return this.$store.state.mood;
        // },
        showMood(){
            return this.$store.state.mood;
        }
    }
}
</script>
<style scoped>
    
</style>