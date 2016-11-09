function ShipDragAvatar(dragZone, dragElem) {
    DragAvatar.apply(this, arguments);
}

extend(ShipDragAvatar, DragAvatar);

ShipDragAvatar.prototype.initFromEvent = function(downX, downY, event) {
    var avatarElem = this._elem = this._dragElem.cloneNode(true);
    avatarElem.style.zIndex = 9999;
    avatarElem.style.position = 'absolute';
    avatarElem.classList.add('ship-avatar');
    document.body.appendChild(avatarElem);
    var coords = getCoords(this._dragElem);
    this._shiftX = downX - coords.left;
    this._shiftY = downY - coords.top;
    this.createPlaceholder();
};

ShipDragAvatar.prototype.createPlaceholder = function () {
    this.placeholder = this._elem.cloneNode(true);
    this.placeholder.classList.add("ship-placeholder");
    this.placeholder.style.left = 0;
    this.placeholder.style.right = 0;
    this.placeholder.style.margin = "-2px";
};

ShipDragAvatar.prototype.onDragStart = function () {
    this._dragElem.style.visibility = 'hidden';
};

ShipDragAvatar.prototype.onDragMove = function (event) {
    var avatarElem = this._elem;
    avatarElem.style.left = event.pageX - this._shiftX + 'px';
    avatarElem.style.top = event.pageY - this._shiftY + 'px';

    /* тестовые данные */
    var shipCenter = getShipCoordCenter(avatarElem);
    this._elementUnderAvatar = getElementUnderClientXY(avatarElem, event.clientX, event.clientY);
    var point = document.getElementById("point");
    var pointCoords = 'x:' + Math.floor(shipCenter.X) + ' y:' + Math.floor(shipCenter.Y);
    point.innerHTML = '<span style="position: absolute; left: -17px; top: 17px; font: 10px monospace; width: 100px;">' + pointCoords  + '</span>';
    point.style.left = shipCenter.X + 'px';
    point.style.top = shipCenter.Y + 'px';
};

ShipDragAvatar.prototype.onDragCancel = function() {
    this._dragElem.style.visibility = 'visible';
    // this.oldParent.insertBefore(this._elem, this.oldNextSibling);
    // this._elem.style.position = this.oldPosition;
    // this._elem.style.left = this.oldStyleLeft;
    // this._elem.style.top = this.oldStyleTop;
};

ShipDragAvatar.prototype.onDragEnd = function () {
    if (this._elem instanceof HTMLElement) {
        this._elem.parentNode.removeChild(this._elem);
    }
};