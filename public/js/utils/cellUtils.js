
//TODO в этом модуле есть зависимость от baggleField которую нужно както правлиьно разрешить.
var cellUtils = (function () {

    function isUnderAvatar(cell, avatar) {
        var cellOffset = cell.elem.getBoundingClientRect();
        var cellWidth = cell.elem.offsetWidth;
        var cellHeight = cell.elem.offsetHeight;
        var centerCoords = avatar.getCenterCoords();
        return centerCoords.clientX >= cellOffset.left
            && centerCoords.clientX <= cellOffset.left + cellWidth
            && centerCoords.clientY >= cellOffset.top
            && centerCoords.clientY <= cellOffset.top + cellHeight;
    }

    function isSuitableForShip(cell) {
        if (cell.isBusy()) return false;
        for (var offset in aroundCellsOffset) {
            var x = cell.x + aroundCellsOffset[offset][0];
            var y = cell.y + aroundCellsOffset[offset][1];
            var verifiableCell = battleField.getCell(x, y);
            if (verifiableCell && verifiableCell.isBusy()) {
                return false;
            }
        }
        return true;
    }

    function isAvailableForShip(cell, ship) {
        var x = cell.x, y = cell.y;
        var suitableCellsCount = 0;
        for (var i = 0; i < ship.length; i++) {
            ship.position == HORIZONTAL ? x = cell.x + i : y = cell.y + i;
            var verifiableCell = battleField.getCell(x, y);
            if (verifiableCell && isSuitableForShip(verifiableCell)) {
                suitableCellsCount++;
            }
        }
        return suitableCellsCount === ship.length;
    }

    function insertShip(cell, ship) {
        var cellContent = cell.getContentElem();
        cellContent.appendChild(ship.elem);
        ship.setCell(cell);
        updateBusyStates(ship, busyStates.BUSY);
    }

    function removeShip(ship) {
        ship.cell = null;
        updateBusyStates(ship, busyStates.FREE);
        ship.coords = [];
    }
    
    function updateBusyStates(ship, state) {
        for (var i = 0; i < ship.coords.length; i++) {
            var x = ship.coords[i].x;
            var y = ship.coords[i].y;
            var cell = battleField.getCell(x, y);
            cell.state = state;
        }
    }

    return {
        isUnderAvatar: isUnderAvatar,
        isAvailableForShip: isAvailableForShip,
        insertShip: insertShip,
        removeShip: removeShip
    };
}());