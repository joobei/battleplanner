<template>
  <div class="match_listing" @mouseover="hover = true" @mouseleave="hover = false">
    <span>
      {{ match_data.id }} - {{ match_data.title }} -
      {{ match_data.name }} - {{ match_data.date }} </span>
          <span v-if="hover"><fa icon="trash" class="faicon fa-spin-hover"></fa></span>
    
  </div>
</template>

<script>
export default {
  name: "Match",
  props: ["match_data"],
  data() {
       return {
      hover: false,
      ready:false
    };
  }
};
</script>

<style scoped>
.match_listing {
  background: #000;
  width: 80vw;
  height: 5vw;
  text-align:left;
}
.match_listing:hover {
    color:#fff;
}

.faicon {
    width: 1vh;
}
.fa-spin-hover:hover {
    animation: fa-spin 2s infinite linear;
    
}
</style>