
function createBattleField() {
    var cellTemplate = templates.get('battlefield-cell-template');
    for (var row = 0; row < fieldSize.height; row++) {
        busyAndFreeCells[row] = [];
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
            busyAndFreeCells[row][col] = marker.FREE;
        }
        rows.push('<tr class="battlefield-row">' + cellsHtml.join("") + "</tr>")
    }
    var battlefieldContainer = document.getElementById("battlefield-container");
    battlefieldContainer.innerHTML = '<table id="battlefield-table">' + rows.join("") + "</table>";
}

function createShip(shipSize, position, id) {
    id = id || "";
    var width = 1;
    var length = shipSize;
    var correction = {right: 0, bottom: shipSize - 1};
    if ("h" == position) {
        width = shipSize; length = 1; correction.right = shipSize - 1; correction.bottom = 0;
    }
    var scale = 2;
    return {
        id: id,
        size: shipSize,
        position: position,
        className: 'ship draggable',
        width: width * scale,
        height: length * scale,
        paddingRight: correction.right,
        paddingBottom: correction.bottom
    };
}

function collocateShips() {
    var port = document.getElementById("port");
    var portLines = [];
    var shipLineTemplate = templates.get('port-line');
    for (var i = 0; i < collocations.length; i++) {
        var collocation = collocations[i];
        var ships = [];
        for (var j = 0; j < collocation.count; j++) {
            ships.push(createShip(collocation.size, "h", getShipId()));
        }
        portLines.push(shipLineTemplate({ships: ships}));
    }
    port.innerHTML = portLines.join('');
}