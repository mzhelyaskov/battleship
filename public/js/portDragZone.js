
function PortDragZone(elem) {
    DragZone.apply(this, arguments);
}

/**
 * Первый аргумент Child
 * Второй аргумент Parent
 **/
extend(PortDragZone, DragZone);

PortDragZone.prototype.createAvatar = function() {
    return new ShipDragAvatar(this, this._elem);
};