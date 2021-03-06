
function DragAvatar(dragZone, dragElem) {
    this.dragZone = dragZone;
    this.dragElem = dragElem;
    this.elem = dragElem;
    this.placeholder = null;
}

/**
 * Инициализовать this._elem и позиционировать его
 * При необходимости уточнить this._dragZoneElem
 * @param downX Координата X нажатия мыши
 * @param downY Координата Y нажатия мыши
 * @param event Текущее событие мыши
 */
DragAvatar.prototype.initFromEvent = function(downX, downY, event) {
    /* override */
};

DragAvatar.prototype.createPlaceholder = function() {
    /* override */
};

DragAvatar.prototype.hidePlaceholder = function() {
    var parentNode = this.placeholder.parentNode;
    parentNode && parentNode.removeChild(this.placeholder);
};

DragAvatar.prototype.showPlaceholder = function(parentElem) {
    parentElem.appendChild(this.placeholder);
};

DragAvatar.prototype.showAvatar = function () {
    this.elem.style.visibility = 'visible';
};

DragAvatar.prototype.hideAvatar = function () {
    this.elem.style.visibility = 'hidden';
};

DragAvatar.prototype.removeAvatar = function () {
    var parentNode = this.elem.parentNode;
    parentNode && parentNode.removeChild(this.elem);
};

/**
 * Возвращает информацию о переносимом элементе для DropZone
 * @param event
 */
DragAvatar.prototype.getDragInfo = function(event) {
    /* override */
};

DragAvatar.prototype.onDragStart = function (downX, downY, event) {
    /* override */
};

/**
 * При каждом движении мыши перемещает this.elem
 * и записывает текущий элемент под this.elem в elementUnderAvatar
 * @param event
 */
DragAvatar.prototype.onDragMove = function(event) {
    /* override */
};

/**
 * Действия с аватаром, когда перенос не удался
 * Например, можно вернуть элемент обратно или уничтожить
 */
DragAvatar.prototype.onDragCancel = function() {
    /* override */
};

/**
 * Уничтожение всех привязанных к аватару элементов
 */
DragAvatar.prototype.onDragEnd = function() {
    /* override */
};