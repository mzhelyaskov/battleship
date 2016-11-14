
function PortDragZone(port) {
    DragZone.apply(this, arguments);
}

extend(PortDragZone, DragZone);

PortDragZone.prototype.createAvatar = function(downX, downY, e) {
    var avatar = new ShipDragAvatar(this, this.dragElem);
    avatar.initFromEvent(downX, downY, event);
    return avatar;
};

PortDragZone.prototype.identifyDragElem = function (clientX, clientY, event) {
    var elem = document.elementFromPoint(clientX, clientY);
    this.dragElem = elem.classList.contains("draggable") ? elem : null;
};