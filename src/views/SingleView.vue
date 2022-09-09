<template>
    <div>
      <MoodRecord/> 
    </div>
</template>
<script>
import MoodRecord from '@/components/MoodRecord.vue';
export default {
    props: ["id"],
    components: { MoodRecord },
    data() {
        return {
            mood: null
        };
    },
    mounted() {
        fetch(`https://capstone-mood-tracker.herokuapp.com/users/${payload.id}/${payload.id}/view/:id` + this.id)
            .then((res) => res.json())
            .then((data) => (this.mood = data))
            .catch(err => console.log(err.message));
    },
}
</script>
<style>
    
</style>