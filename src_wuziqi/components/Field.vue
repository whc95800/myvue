<template>
  <div class="field">
    <table id="field-table">
      <tr v-for="(item,j) in arr" :key="j">
        <td v-for="(item,i) in item" :key="i">
          <div class="chip"></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Field",
  data(){
    return {
      arr:[]
      }
  },
  created() {
    this.addData();
  },
methods:{
    addData(){
      for (let i = 0; i < 15; i++) {
        this.arr.push([])
        for (let j = 0; j < 15; j++) {
          this.arr[i].push("0")
        }
      }
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
