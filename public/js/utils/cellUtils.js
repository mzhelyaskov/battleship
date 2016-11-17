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
        if (cell.isBusy() || !isCoordsValid(cell.x, cell.y)) {
            return false;
        }
        for (var offset in aroundCellsOffset) {
            var x = cell.x + aroundCellsOffset[offset][0];
            var y = cell.y + aroundCellsOffset[offset][1];
            if (isCoordsValid(x, y) && cell.isBusy()) {
                return false;
            }
        }
        return true;
    }

    function isCoordsValid(x, y) {
        return x >= 0 && x < battleFieldSize.HEIGHT && y >= 0 && y < battleFieldSize.WIDTH;
    }

    function isAvailableForShip(cell, ship) {
        var x = cell.x, y = cell.y;
        var suitableCellsCount = 0;
        for (var i = 0; i < ship.length; i++) {
            ship.position == HORIZONTAL ? x += i : y += i;
            if (isSuitableForShip(cell)) {
                suitableCellsCount++;
            }
        }
        return suitableCellsCount === ship.length;
    }

    return {
        isUnderAvatar: isUnderAvatar,
        isAvailableForShip: isAvailableForShip,
        insertShip: function (cell, ship) {
            var cellContent = cell.getContentElem();
            cellContent.appendChild(ship.elem);
        }
    };
}());