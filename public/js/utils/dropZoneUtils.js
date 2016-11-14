function isCellFree(X, Y) {
    return busyAndFreeCellsMap[X][Y] === busyStatus.FREE;
}

function isCellBusy(X, Y) {
    return !isCellFree(X, Y);
}

function isCellSuitableForShip(X, Y) {
    for (var offset in aroundCellsOffset) {
        var offsetX = X + aroundCellsOffset[offset][0];
        var offsetY = Y + aroundCellsOffset[offset][1];
        if (isCoordsRangeCorrect(offsetX, offsetY) && isCellBusy(offsetX, offsetY)) {
            return false;
        }
    }
    return true;
}

function isCoordsRangeCorrect(X, Y) {
    return X >= 0 && X < fieldSize.width && Y >= 0 && Y < fieldSize.height;
}

function isCellOnCoordsAvailable(X, Y) {
    return isCoordsRangeCorrect(X, Y)
        && isCellFree(X, Y)
        && isCellSuitableForShip(X, Y);
}

function isCellAvailable(cell, avatar) {
    var cellY = parseInt(cell.dataset.y, 10);
    var cellX = parseInt(cell.dataset.x, 10);
    var shipLength = parseInt(avatar.elem.dataset.length, 10);
    var shipPosition = HORIZONTAL == avatar.elem.dataset.position ? HORIZONTAL : VERTICAL;
    var suitableCellsCount = 0;
    var X, Y;
    for (var i = 0; i < shipLength; i++) {
        if (shipPosition == HORIZONTAL) {
            Y = cellY;
            X = cellX + i;
        } else {
            Y = cellY + i;
            X = cellX;
        }
        isCellOnCoordsAvailable(X, Y) && suitableCellsCount++;
    }
    return suitableCellsCount === shipLength;
}

function isCellUnderAvatar(cell, avatar) {
    var cellOffset = cell.getBoundingClientRect();
    var cellWidth = cell.offsetWidth;
    var cellHeight = cell.offsetHeight;
    var centerCoords = avatar.getCenterCoords();
    return centerCoords.clientX >= cellOffset.left
        && centerCoords.clientX <= cellOffset.left + cellWidth
        && centerCoords.clientY >= cellOffset.top
        && centerCoords.clientY <= cellOffset.top + cellHeight;
}