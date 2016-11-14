function ShipDragAvatar(dragZone, dragElem) {
    DragAvatar.apply(this, arguments);
}

extend(ShipDragAvatar, DragAvatar);

ShipDragAvatar.prototype.initFromEvent = function(downX, downY, event) {
    var avatarElem = this.elem = this.dragElem.cloneNode(true);
    avatarElem.style.zIndex = 9999;
    avatarElem.style.position = 'absolute';
    avatarElem.classList.add('ship-avatar');
    document.body.appendChild(avatarElem);
    var coords = getCoords(this.dragElem);
    this.shiftX = downX - coords.left;
    this.shiftY = downY - coords.top;
    this.createPlaceholder();
};

ShipDragAvatar.prototype.createPlaceholder = function () {
    this.placeholder = this.elem.cloneNode(true);
    this.placeholder.classList.add("ship-placeholder");
    this.placeholder.style.left = 0;
    this.placeholder.style.right = 0;
    this.placeholder.style.margin = "-2px";
};

ShipDragAvatar.prototype.onDragStart = function () {
    this.dragElem.style.visibility = 'hidden';
};

ShipDragAvatar.prototype.onDragMove = function (event, dropZone) {
    var avatarElem = this.elem;
    avatarElem.style.left = event.pageX - this.shiftX + 'px';
    avatarElem.style.top = event.pageY - this.shiftY + 'px';
    this.center = this.getCenterCoords();
    this.elementUnderAvatar = getElementUnderClientXY(avatarElem, this.center.clientX, this.center.clientY);
    if (!dropZone) {
        this.hidePlaceholder();
        this.showAvatar();
    }

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

ShipDragAvatar.prototype.onDragEnd = function () {
    this.removeAvatar();
    this.dragElem.style.visibility = 'visible';
};

ShipDragAvatar.prototype.getCenterCoords = function () {
    var avatarElem = this.elem;
    var shipOffset = avatarElem.getBoundingClientRect();
    var offset = Math.min(avatarElem.offsetHeight, avatarElem.offsetWidth);
    return {
        clientY: Math.floor(shipOffset.top + offset / 2),
        clientX: Math.floor(shipOffset.left + offset / 2)
    };
};