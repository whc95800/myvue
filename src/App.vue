<template>
  <div id="game">
    <h1>The Game</h1>
    <Turns/>
    <WinResult/>
    <Field/>
  </div>
</template>

<script>
import Turns from "@/components/Turns";
import WinResult from "@/components/WinResult";
import Field from "@/components/Field";

export default {
  name: 'App',
  components: {Turns,WinResult,Field},
}

</script>

<style scoped>
#game {
  width: 640px;
  margin: 0 auto;
}
h1 {
  text-align: center;
}
</style>
