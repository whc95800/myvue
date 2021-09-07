<template>
  <div class="turns">
    <div id="turn-black" class="turn turn-current">Black</div>
    <div id="turn-white" class="turn">White</div>
  </div>
</template>

<script>
export default {
  name: "Turns"
}
</script>

<style scoped>
.turns {
  display: flex;
  font-weight: bold;
  font-size: 24px;
  margin: 20px;
}

.turn {
  flex-grow: 1;
}

.turn.turn-current {
  text-decoration: underline;
}

.turn:nth-child(2) {
  text-align: end;
}
</style>
