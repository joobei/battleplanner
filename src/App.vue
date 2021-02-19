<template>
  <div id="App">
    <h1>Hell Let Loose War Planner</h1>
    <!-- <Upcoming v-bind:match_data="matches" /> -->
            <div v-for="data in myJson.matches" v-bind:key="data.id">
              {{data.id}}
              </div>
    </div>
</template>

<script>
//import Upcoming from './components/Upcoming';

import json from './assets/matches.json'

export default{
          data(){
              return{
                  myJson: json
              }
          }
      }
</script>

<style>
  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  body {
    background-color: rgb(17,17,17);
  font-family: Inter, Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height: 1.4;
  }
</style>
