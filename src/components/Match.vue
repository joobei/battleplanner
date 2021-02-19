<template>
    <div>
        <h1>Upcoming Matches</h1>
        <div v-for="match in match_data" :key="match.id">
            <h3>{{match.title}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "Upcoming",
    props:["match_data"]
}
</script>

<style scoped>
</style>