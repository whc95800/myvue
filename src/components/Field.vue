<template>
  <div class="field">
    <table id="field-table">{{}}</table>
  </div>
</template>

<script>
export default {
  name: "Field",
  addField(){
    const ROWS=15;
    const COLUMNS=15;
    const table = document.getElementById("field-table");
    for (let y = 0; y <ROWS; y++) {
      const row = document.createElement("tr");
      for (let x = 0; x < COLUMNS; x++) {
        const box = document.createElement("td");
        const chips = document.createElement("div");
        const lastRow = document.createElement("div");
        const lastColumn = document.createElement("div");
        const lastRowColumn = document.createElement("div");
        box.appendChild(chips);
        row.appendChild(box);
        if (x === 14){
          lastRow.className="chip last-in-row";
          box.appendChild(lastRow);
        }
        if (x === 14&&y === 14){
          lastRowColumn.className="chip last-in-column last-in-row";
          box.appendChild(lastRowColumn);
        }
        if (y === 14){
          lastColumn.className="chip last-in-column";
          box.appendChild(lastColumn);
        }

        chips.className = "chip";

        chips.innerHTML="0";
        lastRow.innerHTML="0";
        lastColumn.innerHTML="0";
        lastRowColumn.innerHTML="0";
      }
      table.appendChild(row);
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
  background-color: rgb(255, 255, 255, 0.5);
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
