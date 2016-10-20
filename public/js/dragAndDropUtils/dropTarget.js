/**
 * Зона, в которую объекты можно класть
 * Занимается индикацией передвижения по себе, добавлением в себя
 */
function DropTarget(elem) {
    elem.dropTarget = this;
    this._elem = elem;

    /**
     * Подэлемент, над которым в настоящий момент находится аватар
     */
    this._targetElem = null;
}

/**
 * Возвращает DOM-подэлемент, над которым сейчас пролетает аватар
 * @return DOM-элемент, на который можно положить или undefined
 */
DropTarget.prototype._getTargetElem = function(avatar, event) {
    return this._elem;
};

/**
 * Спрятать индикацию переноса
 * Вызывается, когда аватар уходит с текущего this._targetElem
 */
DropTarget.prototype._hideHoverIndication = function(avatar) {
    /* override */
};

/**
 * Показать индикацию переноса
 * Вызывается, когда аватар пришел на новый this._targetElem
 */
DropTarget.prototype._showHoverIndication = function(avatar) {
    /* override */
};

/**
 * Метод вызывается при каждом движении аватара
 */
DropTarget.prototype.onDragMove = function(avatar, event) {
    /* override */
};

/**
 * Завершение переноса.
 * Алгоритм обработки (переопределить функцию и написать в потомке):
 * 1. Получить данные переноса из avatar.getDragInfo()
 * 2. Определить, возможен ли перенос на _targetElem (если он есть)
 * 3. Вызвать avatar.onDragEnd() или avatar.onDragCancel()
 *  Если нужно подтвердить перенос запросом на сервер, то avatar.onDragEnd(),
 *  а затем асинхронно, если сервер вернул ошибку, avatar.onDragCancel()
 *  При этом аватар должен уметь "откатываться" после onDragEnd.
 *  При любом завершении этого метода нужно (делается ниже):
 *  снять текущую индикацию переноса
 *  обнулить this._targetElem
 */
DropTarget.prototype.onDragEnd = function(avatar, event) {
    /* override */
};

/**
 * Вход аватара в DropTarget
 */
DropTarget.prototype.onDragEnter = function(fromDropTarget, avatar, event) {
    /* override */
};

/**
 * Выход аватара из DropTarget
 */
DropTarget.prototype.onDragLeave = function(toDropTarget, avatar, event) {
    /* override */
};