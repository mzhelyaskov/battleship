/**
 * Зона, из которой можно переносить объекты
 * Умеет обрабатывать начало переноса на себе и создавать "аватар"
 * @param elem DOM-элемент, к которому привязана зона
 */
function DragZone(elem) {
    elem.dragZone = this;
    this._elem = elem;
}

/**
 * Создать аватар, соответствующий зоне.
 * У разных зон могут быть разные типы аватаров
 */
DragZone.prototype.createAvatar = function() {
    /* override */
};

DragZone.prototype.onDragStart = function(downX, downY, event) {
    /* override */
};

DragZone.prototype.identifyDragElem = function(downX, downY, event) {
    /* override */
};