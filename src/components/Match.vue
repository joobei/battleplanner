<template>
  <div
    class="match_listing"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <span>
      {{ match_data.id }} - {{ match_data.title }} - {{ match_data.map }} -
      {{ match_data.date }}
    </span>
    <ListEditIcons v-if="hover" />
  </div>
</template>

<script>
import ListEditIcons from './ListEditIcons';
export default {
  name: "Match",
  props: ["match_data"],
  components: {ListEditIcons},
  data() {
    return {
      hover: false,
      ready: false,
    };
  },
};
</script>

<style scoped>
.match_listing {
  background: #000;
  text-align: left;
  color: rgb(175, 175, 175);
  padding: 0.5vh;
}
.match_listing:hover {
  color: #fff;
}


</style>