/**
 * Определяет координаты элемента относительно document
 */
function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docElem = document.documentElement;
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return {top: Math.round(top), left: Math.round(left)};
}

/**
* Возвращает элемент, который находится на координатах (x, y) относительно окна.
*/
function getElementUnderClientXY(elem, clientX, clientY) {
    var display = elem.style.display || '';
    elem.style.display = 'none';
    var target = document.elementFromPoint(clientX, clientY);
    elem.style.display = display;
    if (!target || target == document) { // это бывает при выносе за границы окна
        target = document.body; // поправить значение, чтобы был именно элемент
    }
    return target;
}

function addShipToMap(avatar) {
    var cell = avatar._elem.closest(".battlefield-cell");
    if (cell) {
        var shipElem = avatar._elem;
        var dataY = parseInt(cell.getAttribute("data-y"), 10);
        var dataX = parseInt(cell.getAttribute("data-x"), 10);
        var dataId = shipElem.getAttribute("data-id");
        var shipLength = parseInt(shipElem.getAttribute("data-length"), 10);
        var shipPosition = shipElem.getAttribute("data-position");
        isCellSuitableForShip(dataY, dataX, shipLength, shipPosition, false, dataId);
    }
}

function deletePlaceholder(avatar) {
    // ошибка в определении драгзон
    // var cells = avatar._dragZone.querySelectorAll(".battlefield-cell");
    // cells.forEach(function (cell) {
    //     cell.parentNode.removeChild(cell.querySelector(".ship-placeholder"));
    // });
}

function getCellSize(dropTarget) {
    var cell = dropTarget._elem.querySelector(".battlefield-cell");
    return {
        height: cell.offsetHeight,
        width: cell.offsetWidth
    }
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

var marker = {
    FREE: 0,
    BUSY: 1
};

var shipStatus = {
    HIDDEN: -1,
    WOUNDED: 0,
    KILLED: 1
};

var detectionStatus = {
    HIDDEN: 0,
    FOUNDED: 1
};

var shipObjects = [];

var allAroundCellOffset = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];

function getShipId() {
    for (var e, t = 12, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", id = "", r = 0; t > r; r++) {
        e = Math.floor(Math.random() * n.length);
        id += n.substring(e, e + 1);
    }
    return id
}

function isCellBusy(row, col) {
    return busyAndFreeCells[row][col] == marker.BUSY;
}

function isCellUnsuitableForShip(row, col) {
    for (var i in allAroundCellOffset) {
        if (!allAroundCellOffset.hasOwnProperty(i)) continue;
        var rowOffset = row + allAroundCellOffset[i][0];
        var colOffset = col + allAroundCellOffset[i][1];
        if (areIndexesInTheAllowedRange(rowOffset, colOffset) && isCellBusy(rowOffset, colOffset)) {
            return true;
        }
    }
    return false;
}

function areIndexesInTheAllowedRange(row, col) {
    return row >= 0 && row < fieldSize.height && col >= 0 && col < fieldSize.width;
}

function cellsAroundAreSuitable(row, col) {
    return areIndexesInTheAllowedRange(row, col)
        && !isCellBusy(row, col)
        && !isCellUnsuitableForShip(row, col);
}


function isCellSuitableForShip(dataY, dataX, dataLength, dataPosition, checkTargetCells, shipId, allCellsAroundAreSuitable) {
    dataPosition = "h" == dataPosition ? "h" : "v";
    var row, col, cellY = dataY, cellX = dataX, countOfCorrectCells = 0;
    allCellsAroundAreSuitable = allCellsAroundAreSuitable || cellsAroundAreSuitable;
    var newShipObject = {
        id: shipId || getShipId,
        state: shipStatus.HIDDEN,
        y: dataY,
        x: dataX,
        len: dataLength,
        pos: dataPosition,
        coords: []
    };
    for (var i = 0; i < dataLength; i++) {
        if (dataPosition == "h") {
            row = cellY;
            col = cellX + i;
        } else {
            row = cellY + i;
            col = cellX;
        }
        if (checkTargetCells) {
            allCellsAroundAreSuitable(row, col) && countOfCorrectCells++;
        } else {
            busyAndFreeCells[row][col] = marker.BUSY;
            newShipObject.coords.push({
                y: row,
                x: col,
                state: detectionStatus.HIDDEN
            });
        }
    }
    if (checkTargetCells) {
        return countOfCorrectCells === dataLength;
    }
    shipObjects.push(newShipObject);
    return newShipObject.id;
}





















