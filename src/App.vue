<template>
  <div id="App">
    <h1>Hell Let Loose War Planner</h1>
    <div v-for="data in myJson.matches" v-bind:key="data.id">
      <Match v-bind:match_data="data" />
    </div>
  </div>
</template>

<script>
import Match from "./components/Match";
import json from "./assets/matches.json";

export default {
  name: "app",
  components: { Match },
  data() {
    return {
      myJson: json,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(17, 17, 17);
  font-family: Inter, Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height: 1.4;
}
h1 {
  font-size: 2vw;
}
</style>
