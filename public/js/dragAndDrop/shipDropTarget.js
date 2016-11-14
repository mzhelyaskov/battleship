function ShipDropZone(elem) {
    DropZone.apply(this, arguments);
}

extend(ShipDropZone, DropZone);

ShipDropZone.prototype.getTargetElem = function(avatar) {
    var battleField = this.elem;
    var cells = battleField.querySelectorAll(BATTLE_FIELD_CELL_CSS);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        if (isCellUnderAvatar(cell, avatar)) {
            if (isCellAvailable(cell, avatar)) {
                return this.targetElem = cell;
            }
        }
    }
    return this.targetElem = null;
};

ShipDropZone.prototype.onDragEnter = function(cell, avatar) {
    var placeholderParent = cell.querySelector(CELL_CONTENT_CSS);
    avatar.showPlaceholder(placeholderParent);
    avatar.hideAvatar();
};

ShipDropZone.prototype.onDragLeave = function(cell, avatar) {
    avatar.hidePlaceholder();
    avatar.showAvatar();
};

ShipDropZone.prototype.onDragEnd = function(avatar) {
    if (!this.targetElem) return;
    var cellElem = this.targetElem;
    var shipElem = avatar.dragElem;
    var ship = shipElem.ship;
    shipUtils.insertShipElemIntoContent(shipElem, cellElem);
    shipUtils.updateProperties(ship, cellElem, avatar.elem);
    battleField.addShipToField(ship);
    avatar.hidePlaceholder();
};