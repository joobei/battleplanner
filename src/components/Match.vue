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
    <div v-if="hover" class="icons">
      <fa icon="trash" class="faicon fa-spin-hover"></fa>
    </div>
    <div v-if="hover" class="icons">
      <fa icon="edit" class="faicon fa-spin-hover"></fa>
    </div>
  </div>
</template>

<script>
export default {
  name: "Match",
  props: ["match_data"],
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

.faicon {
  width: 2vh;
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(15deg);
  }
  66% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.fa-spin-hover {
  display: inline-block;
  animation: none;
}
.fa-spin-hover:hover {
  color: red;
  animation: wiggle 1s infinite;
}

.icons {
  width: 15%;
  float: right;
}
</style>