<template>
<h3>member info</h3>
<div v-for="data in myJson.members" v-bind:key="data.id">
<span>{{data.id}} - {{data.name}}</span>          
</div>
</template>


<script>
import json from "../assets/members.json";

export default {
    name: 'Members',
    properties: 'member_data',
    data() {
    return {
      myJson: json,
    };
  }
}
</script>




<style scoped>

</style>