function BattleField() {
    this.ships = {};
    this.elem = createBattleField();

    this.addShipToField = function (ship) {
        this.ships[ship.id] = ship;
    };

    function createBattleField() {
        var table = document.createElement('table');
        table.id = "battlefield-table";
        var battlefieldContainer = document.getElementById("battlefield-container");
        battlefieldContainer.appendChild(table);
        var rows = [];
        var cellTemplate = templateEngine.get("battlefield-cell-template");
        for (var row = 0; row < fieldSize.height; row++) {
            busyAndFreeCellsMap[row] = [];
            var cellsHtml = [];
            for (var col = 0; col < fieldSize.width; col++) {
                var cellLabel = "";
                if (col === 0) {
                    cellLabel += '<div class="marker marker-row">' + (row + 1) + "</div>"
                }
                if (row === 0) {
                    cellLabel += '<div class="marker marker-col">' + letters[col] + "</div>"
                }
                cellsHtml.push(cellTemplate({col: col, row: row, cellLabel: cellLabel}));
                busyAndFreeCellsMap[row][col] = busyStatus.FREE;
            }
            rows.push('<tr class="battlefield-row">' + cellsHtml.join("") + "</tr>")
        }
        table.innerHTML = rows.join("");
    }
}