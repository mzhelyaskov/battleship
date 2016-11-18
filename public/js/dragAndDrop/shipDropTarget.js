function ShipDropZone(elem) {
    DropZone.apply(this, arguments);
}

extend(ShipDropZone, DropZone);

ShipDropZone.prototype.getTargetElem = function (avatar) {
    var cells = battleField.getCells();
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        if (cellUtils.isUnderAvatar(cell, avatar)) {
            if (cellUtils.isAvailableForShip(cell, avatar.ship)) {
                return this.target = cell;
            }
        }
    }
    return this.target = null;
};

ShipDropZone.prototype.onDragEnter = function (cell, avatar) {
    avatar.showPlaceholder(cell.getContentElem());
    avatar.hideAvatar();
};

ShipDropZone.prototype.onDragLeave = function (cell, avatar) {
    avatar.hidePlaceholder();
    avatar.showAvatar();
};

ShipDropZone.prototype.onDragEnd = function (avatar) {
    if (!this.target) return;
    battleField.addShip(this.target, avatar.ship);
    avatar.hidePlaceholder();
};