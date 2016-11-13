/**
 * "Аватар" - элемент, который перетаскивается.
 *
 * В простейшем случае аватаром является сам переносимый элемент
 * Также аватар может быть клонированным элементом
 * Также аватар может быть иконкой и вообще чем угодно.
 */
function DragAvatar(dragZone, dragElem) {
    this._dragZone = dragZone;
    this._dragElem = dragElem;
    this._elem = dragElem;
    this._placeholder = null;
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
    this._placeholder.parentNode.removeChild(this._placeholder)
};

DragAvatar.prototype.showPlaceholder = function(parentElem) {
    parentElem.appendChild(this._placeholder);
};

DragAvatar.prototype.showAvatar = function () {
    this._elem.style.visibility = 'visible';
};

DragAvatar.prototype.hideAvatar = function () {
    this._elem.style.visibility = 'hidden';
};

DragAvatar.prototype.removeAvatar = function () {
    var parentNode = this._elem.parentNode;
    parentNode && parentNode.removeChild(this._elem);
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
 * При каждом движении мыши перемещает this._elem
 * и записывает текущий элемент под this._elem в _elementUnderAvatar
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