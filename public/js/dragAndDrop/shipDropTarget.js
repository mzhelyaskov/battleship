function ShipDropZone(elem) {
    DropZone.apply(this, arguments);
}

extend(ShipDropZone, DropZone);

ShipDropZone.prototype.getTargetElem = function(avatar) {
    var battleField = this._elem;
    var cells = battleField.querySelectorAll(".battlefield-cell");
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        if (isCellUnderAvatar(cell, avatar)) {
            var cellY = parseInt(cell.dataset.y, 10);
            var cellX = parseInt(cell.dataset.x, 10);
            var shipLength = parseInt(avatar._elem.dataset.length, 10);
            var shipPosition = avatar._elem.dataset.position;
            if (isCellSuitableForShip(cellY, cellX, shipLength, shipPosition, true)) {
                return this._targetElem = cell;
            }
        }
    }
    return this._targetElem = null;
};

ShipDropZone.prototype.onDragMove = function(dropTarget, avatar, event) {

};

ShipDropZone.prototype.onDragEnter = function(cell, avatar) {
    var cellContent = cell.querySelector(".battlefield-cell-content");
    avatar.showPlaceholder(cellContent);
    avatar.hideAvatar();
};

ShipDropZone.prototype.onDragLeave = function(cell, avatar) {
    avatar.hidePlaceholder();
    avatar.showAvatar();
};

ShipDropZone.prototype.onDragEnd = function(avatar) {
    if (this._targetElem) {
        avatar._placeholder.parentNode.appendChild(avatar._dragElem);
        avatar.hidePlaceholder();
    }

    // if (!avatar.placeholder.parentNode) {
    //     return;
    // }
    // avatar.placeholder.parentNode.insertBefore(avatar._elem, avatar.placeholder.nextSibling);
    // avatar._elem.style.position = avatar.placeholder.style.position;
    // avatar._elem.style.left = avatar.placeholder.style.left;
    // avatar._elem.style.top = avatar.placeholder.style.top;
    // avatar.placeholder.parentNode.removeChild(avatar.placeholder);
    // addShipToMap(avatar);
};