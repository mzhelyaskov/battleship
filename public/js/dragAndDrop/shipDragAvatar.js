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
    this._placeholder = this._elem.cloneNode(true);
    this._placeholder.classList.add("ship-placeholder");
    this._placeholder.style.left = 0;
    this._placeholder.style.right = 0;
    this._placeholder.style.margin = "-2px";
};

ShipDragAvatar.prototype.onDragStart = function () {
    this._dragElem.style.visibility = 'hidden';
};

ShipDragAvatar.prototype.onDragMove = function (event) {
    var avatarElem = this._elem;
    avatarElem.style.left = event.pageX - this._shiftX + 'px';
    avatarElem.style.top = event.pageY - this._shiftY + 'px';
    this.center = this.getCenterCoords();
    this._elementUnderAvatar = getElementUnderClientXY(avatarElem, this.center.clientX, this.center.clientY);
    
    /** 
     * тестовые данные 
     **/
    var shipOffset = getCoords(avatarElem);
    var point = document.getElementById("point");
    var offset = Math.min(avatarElem.offsetHeight, avatarElem.offsetWidth);
    point.firstElementChild.innerHTML = 'x:' + this.center.clientX + ' y:' + this.center.clientY;
    point.style.left = Math.floor(shipOffset.left + offset / 2) + 'px';
    point.style.top = Math.floor(shipOffset.top + offset / 2) + 'px';
};

ShipDragAvatar.prototype.onDragCancel = function() {
    
};

ShipDragAvatar.prototype.onDragEnd = function () {
    this.removeAvatar();
    this._dragElem.style.visibility = 'visible';
};

ShipDragAvatar.prototype.getCenterCoords = function () {
    var avatarElem = this._elem;
    var shipOffset = avatarElem.getBoundingClientRect();
    var offset = Math.min(avatarElem.offsetHeight, avatarElem.offsetWidth);
    return {
        clientY: Math.floor(shipOffset.top + offset / 2),
        clientX: Math.floor(shipOffset.left + offset / 2)
    };
};