(function (global) {
    global.shipUtils = {
        updateProperties: function (ship, cellElem, avatarElem) {
            ship.x = parseInt(cellElem.dataset.x, 10);
            ship.y = parseInt(cellElem.dataset.y, 10);
            ship.position = avatarElem.dataset.position;
            ship.coords = [];
            var x, y;
            for (var i = 0; i < ship.length; i++) {
                if (ship.position == HORIZONTAL) {
                    x = ship.x;
                    y = ship.y + i;
                } else {
                    x = ship.x + i;
                    y = ship.y;
                }
                busyAndFreeCellsMap[x][y] = busyStatus.BUSY;
                ship.coords.push({x: x, y: y, state: detectionStatus.HIDDEN});
            }
        },
        insertShipElemIntoContent: function (shipElem, cellElem) {
            var cellContent = cellElem.querySelector(CELL_CONTENT_CSS);
            cellContent.appendChild(shipElem);
        }
    }
})(window);