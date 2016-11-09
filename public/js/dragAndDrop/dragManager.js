var dragManager = new function() {

    var dragZone;
    var avatar;
    var dropTarget;
    var downX, downY, clientX, clientY;

    function onMouseDown(event) {
        if (event.which != 1) { // не левой кнопкой
            return false;
        }
        dragZone = findDragZone(event);
        if (!dragZone) return;
        downX = event.pageX;
        downY = event.pageY;
        clientX = event.clientX;
        clientY = event.clientY;
        return false;
    }

    function onMouseMove(e) {
        updateDragMonitor(downX, downY, clientX, clientY, dragZone, avatar, dropTarget);
        if (!dragZone) return;
        if (!avatar) {
            if (Math.abs(e.pageX - downX) < 3 && Math.abs(e.pageY - downY) < 3) {
                return;
            }
            dragZone.identifyDragElem(clientX, clientY, e);
            if (!dragZone._dragElem) {
                cleanUp();
                return;
            }
            avatar = dragZone.createAvatar(downX, downY, e);
            avatar.onDragStart();
        }
        avatar.onDragMove(e);
        var newDropTarget = findDropTarget(e);
        if (newDropTarget != dropTarget) {
            dropTarget && dropTarget.onDragLeave(newDropTarget, avatar, e);
            newDropTarget && newDropTarget.onDragEnter(dropTarget, avatar, e);
        }
        dropTarget = newDropTarget;
        dropTarget && dropTarget.onDragMove(avatar, e);
        updateDragMonitor(downX, downY, dragZone, avatar, dropTarget);
        return false;
    }

    function onMouseUp(e) {
        if (e.which != 1) {
            return false;
        }
        if (avatar) {
            avatar.onDragEnd();
            if (dropTarget) {
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


function updateDragMonitor(downX, downY, clientX, clientY, dragZone, avatar, dropTarget) {
    if (!avatar) return
    var dragMonitor = document.getElementById('dragMonitor');
    var list = [];
    list.push('<li>downX: ' + downX + '</li>');
    list.push('<li>downY: ' + downY + '</li>');
    list.push('<li>clientX: ' + clientX + '</li>');
    list.push('<li>clientY: ' + clientY + '</li>');
    list.push('<li>shiftX: ' + avatar._shiftX + '</li>');
    list.push('<li>shiftY: ' + avatar._shiftY + '</li>');
    dragMonitor.innerHTML = list.join('');
}