<template>
     <fa v-bind:icon=icon_name class="left_nav_icon"></fa>
</template>

<script>
export default {
    name: "Nav_icon",
    props:['icon_name']
}
</script>

<style scoped>

.left_nav_icon {
  width: 3vh;
  height: 3vh;
  margin-top:1vh;
  margin-bottom:1vh;
  margin-left:auto;
  margin-right:auto;
  color:rgb(167, 167, 167);
  
}

.left_nav_icon:hover {
background-color:rgb(37, 37, 37);
border:5px solid rgb(37, 37, 37);
}

</style>