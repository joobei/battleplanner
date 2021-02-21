<template>
     <router-link v-bind:to=link_target><fa v-bind:icon=icon_name class="left_nav_icon"></fa></router-link>
</template>

<script>
export default {
    name: "Nav_icon",
    props:['icon_name','link_target']
}
</script>

<style scoped>

.left_nav_icon {
  width: 60%;
  height:60%;
  margin-top:1vh;
  margin-bottom:1vh;
  margin-left:auto;
  margin-right:auto;
  color:rgb(167, 167, 167);
  
}

.left_nav_icon:hover {
background-color:rgb(37, 37, 37);
/* border:5px solid rgb(37, 37, 37); */
}

</style>