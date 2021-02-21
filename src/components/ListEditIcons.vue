<template>
  <div class="icons">
    <fa icon="trash" class="faicon fa-spin-hover"></fa>
  </div>
  <div class="icons">
    <fa icon="edit" class="faicon fa-spin-hover"></fa>
  </div>
</template>
        
<script>
export default {
    name:"ListEditIcons"
};
</script>

<style scoped>
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