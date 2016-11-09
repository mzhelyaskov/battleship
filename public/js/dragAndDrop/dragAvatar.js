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

/**
 * Возвращает информацию о переносимом элементе для DropTarget
 * @param event
 */
DragAvatar.prototype.getDragInfo = function(event) {
    /* override */
};

/**
 * Возвращает текущий самый глубокий DOM-элемент под this._elem
 * Приватное свойство _elementUnderAvatar обновляется при каждом передвижении
 */
DragAvatar.prototype.getTargetElem = function() {
    return this._elementUnderAvatar;
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