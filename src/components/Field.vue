<template>
  <div class="field">
    <table id="field-table">
      <tr v-for="indexy in column" :key="indexy">
        <td v-for="indexx in rows" :key="indexx">
          <div class="chip"></div>
          <div v-if="indexx===15" class="chip last-in-row"></div>
          <div v-if="indexy===15" class="chip last-in-column"></div>
          <div v-if="indexx&indexy===15" class="chip last-in-row last-in-column"></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Field",
  data(){
    return{
      rows: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      column:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }
  }
}

</script>

<style scoped>
.field {
  width: 640px;
  height: 640px;
  background-color: #966f54;
  padding: 0.05px;
}

#field-table {
  border: 2px solid #4d3420;
  margin: 40px;
  border-collapse: collapse;
  width: 560px;
  height: 560px;
}

#field-table td {
  border: 2px solid #4d3420;
  border-spacing: 0;
  padding: 0;
  position: relative;
}

.chip {
  border-radius: 17px;
  height: 34px;
  width: 34px;
  position: absolute;
  left: -18px;
  top: -18px;
  transition: background-color 0.2s ease;
}

.chip:hover {
  background-color: rgb(255, 255, 255,0.5);
}
.chip.last-in-row {
  right: -18px;
  left: inherit;
}

.chip.last-in-column {
  bottom: -18px;
  top: inherit;
}

.chip.black {
  background: radial-gradient(
    farthest-side at 34px 34px,
    #ffffff 0%,
    #000000 70%
  );
  box-shadow: -3px -3px 10px black;
}

.chip.white {
  background: radial-gradient(
    farthest-side at 34px 34px,
    #ffffff 0%,
    #d0cfcd 70%
  );
  box-shadow: -3px -3px 10px black;
}
</style>
