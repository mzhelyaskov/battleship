function ShipDragAvatar(dragZone, dragElem) {
    DragAvatar.apply(this, arguments);
}

extend(ShipDragAvatar, DragAvatar);

ShipDragAvatar.prototype.initFromEvent = function(downX, downY, event) {
    if (!event.target.classList.contains("draggable")) return false;
    var avatarElem = this._elem = this._dragZoneElem = event.target;
    avatarElem.classList.add('avatar');

    // запоминаем исходное местоположение
    this.oldParent = avatarElem.parentNode;
    this.oldNextSibling = avatarElem.nextSibling;
    this.oldPosition = avatarElem.style.position || '';
    this.oldStyleLeft = avatarElem.style.left;
    this.oldStyleTop = avatarElem.style.top;

    // Создаем плейсхолдер который в будуем будет показывать место приземления
    this.placeholder = avatarElem.cloneNode(false);
    this.placeholder.classList.add("ship-placeholder");
    this.placeholder.style.left = 0;
    this.placeholder.style.right = 0;
    this.placeholder.style.margin = "-2px";
    
    // создать вспомогательные свойства shiftX / shiftY
    var coords = getCoords(this._dragZoneElem);
    this._shiftX = downX - coords.left;
    this._shiftY = downY - coords.top;

    // инициировать начало переноса
    document.body.appendChild(avatarElem);
    avatarElem.style.zIndex = 9999;
    avatarElem.style.position = 'absolute';
    return true;
};

ShipDragAvatar.prototype.onDragCancel = function() {
    this.oldParent.insertBefore(this._elem, this.oldNextSibling);
    this._elem.style.position = this.oldPosition;
    this._elem.style.left = this.oldStyleLeft;
    this._elem.style.top = this.oldStyleTop;
};

ShipDragAvatar.prototype.onDragEnd = function() {
    // this._destroy();
};

ShipDragAvatar.prototype.removePlaceholderFromDisplay = function() {
    if (this.placeholder.parentNode) {
        this.placeholder.parentNode.removeChild(this.placeholder);
    }
};