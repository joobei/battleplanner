<template>
  <div id="App">
    <div id="header" style="display:flex">
    <img src="./assets/hll_logo.jpeg" style="width:5vw;display:block;margin-left:2vh;"/>
      <h1 style="margin:auto;">Hell Let Loose War Planner</h1>
    </div>
    <div id="bottom">
      <div id="left_nav_pane">
        <Navicon icon_name=home></Navicon>
      </div>
      <div id="main_content">
        <div v-for="data in myJson.matches" v-bind:key="data.id">
          <Match v-bind:match_data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Match from "./components/Match";
import json from "./assets/matches.json";
import Navicon from "./components/Navicon";

export default {
  name: "app",
  components: { Match, Navicon },
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

#App {
    display: flex;
    flex-direction: column;
}

#header {
  min-height: 5vw;
  
  border-bottom: slategray 1px solid;
}
#bottom {
    display: flex;
    flex:1;
}
#left_nav_pane {
  padding: 3px;
  border-right: slategray 1px solid;
  flex: 0 0 10%;
  display:flex;
  flex-direction: column;
}

.left_nav_icon {
  width: 3vh;
  height: 3vh;
  margin-top:2vh;
  margin-bottom:1vh;
  margin-left:auto;
  margin-right:auto;
  color:rgb(167, 167, 167);
  
}

.left_nav_icon:hover {
background-color:rgb(37, 37, 37);
border:5px solid rgb(37, 37, 37);
}

#main_content {  
      flex: 1;
      padding: 1vh;
}

body {
  background-color: rgb(17, 17, 17);
  /* font-family: Inter, Roboto, sans-serif; */
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  line-height: 1.4;
}
h1 {
  font-size: 2vw;
  color:#fff;
  font-weight:normal;
}
</style>
