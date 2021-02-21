<template>
<h1>test</h1>
     <div v-for="data in myJson.matches" v-bind:key="data.id">
          <Match v-bind:match_data="data" />
        </div>
</template>

<script>
import Match from "./Match";
import json from "../assets/matches.json";

export default {
    components: { Match },
    data() {
    return {
      myJson: json,
    };
  }
}
</script>

