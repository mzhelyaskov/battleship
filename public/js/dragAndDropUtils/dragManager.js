var dragManager = new function() {

    var dragZone; // зона откуда переносим
    var avatar; // визуальное представление переносимого объекта
    var dropTarget; // зона на которую переносим
    var downX, downY;

    function onMouseDown(event) {
        if (event.which != 1) { // не левой кнопкой
            return false;
        }
        dragZone = findDragZone(event);
        if (!dragZone) return;
        downX = event.pageX;
        downY = event.pageY;
        return false;
    }

    function onMouseMove(e) {
        if (!dragZone) return; // элемент не зажат
        if (!avatar) { // элемент нажат, но пока не начали его двигать
            if (Math.abs(e.pageX - downX) < 3 && Math.abs(e.pageY - downY) < 3) {
                return;
            }
            avatar = dragZone.onDragStart(downX, downY, e);
            if (!avatar) { // не получилось, значит перенос продолжать нельзя
                cleanUp(); // очистить приватные переменные, связанные с переносом
                return;
            }
        }
        avatar.onDragMove(e);
        var newDropTarget = findDropTarget(e);
        if (newDropTarget != dropTarget) {
            dropTarget && dropTarget.onDragLeave(newDropTarget, avatar, e);
            newDropTarget && newDropTarget.onDragEnter(dropTarget, avatar, e);
        }
        dropTarget = newDropTarget;
        dropTarget && dropTarget.onDragMove(avatar, e);
        return false;
    }

    function onMouseUp(e) {
        if (e.which != 1) { // не левой кнопкой
            return false;
        }
        if (avatar) { // если уже начали передвигать
            if (dropTarget) {
                // завершить перенос и избавиться от аватара, если это нужно
                // эта функция обязана вызвать avatar.onDragEnd/onDragCancel
                dropTarget.onDragEnd(avatar, e);
            } else {
                avatar.onDragCancel();
            }
        }
        cleanUp();
    }

    document.onmousedown = onMouseDown;
    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.ondragstart = function() {
        return false;
    };

    function cleanUp() {
        // очистить все промежуточные объекты
        dragZone = avatar = dropTarget = null;
    }

    /**
     * функция для определения области в которой находятся объекты для переноса.
     * Находит ближайший dragZone идем вверх по родителям от target
     * до элемента document и ищим элемент с полем dragZone
     **/
    function findDragZone(event) {
        var elem = event.target;
        while (elem != document && !elem.dragZone) {
            elem = elem.parentNode;
        }
        return elem.dragZone;
    }

    /**
     * Находит элемент на который можно переносить элемент
     * Возвращает DOM элемент котормоу присвоено поле dropTarget 
     **/
    function findDropTarget(event) {
        // получить элемент под аватаром
        var elem = avatar.getTargetElem();
        while (elem != document && !elem.dropTarget) {
            elem = elem.parentNode;
        }
        if (!elem.dropTarget) {
            return null;
        }
        return elem.dropTarget;
    }
};