/**
 * Зона, в которую объекты можно класть
 * Занимается индикацией передвижения по себе, добавлением в себя
 */
function DropZone(elem) {
    elem.dropTarget = this;
    this.elem = elem;
    this.target = null;
}

/**
 * Возвращает DOM-подэлемент, над которым сейчас пролетает аватар
 * @return DOM-элемент, на который можно положить или undefined
 */
DropZone.prototype.getTargetElem = function(avatar) {
    /* override */
};

/**
 * Метод вызывается при каждом движении аватара
 */
DropZone.prototype.onDragMove = function(avatar, event) {
    /* override */
};

/**
 *  Завершение переноса.
 *  Алгоритм обработки (переопределить функцию и написать в потомке):
 *      1. Получить данные переноса из avatar.getDragInfo()
 *      2. Определить, возможен ли перенос на targetElem (если он есть)
 *      3. Вызвать avatar.onDragEnd() или avatar.onDragCancel()
 *  Если нужно подтвердить перенос запросом на сервер, то avatar.onDragEnd(),
 *  а затем асинхронно, если сервер вернул ошибку, avatar.onDragCancel()
 *  При этом аватар должен уметь "откатываться" после onDragEnd.
 *  При любом завершении этого метода нужно (делается ниже):
 *  снять текущую индикацию переноса
 *  обнулить this.targetElem
 */
DropZone.prototype.onDragEnd = function(avatar, event) {
    /* override */
};

/**
 * Вход аватара в DropZone
 */
DropZone.prototype.onDragEnter = function(fromDropTarget, avatar) {
    /* override */
};

/**
 * Выход аватара из DropZone
 */
DropZone.prototype.onDragLeave = function(toDropTarget, avatar) {
    /* override */
};