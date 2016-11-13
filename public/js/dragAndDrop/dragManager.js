var dragManager = new function() {

    var dragZone;
    var avatar;
    var dropZone, dropTarget;
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

    function onMouseMove(event) {
        updateDragMonitor(downX, downY, clientX, clientY, dragZone, avatar, dropTarget);
        if (!dragZone) return;
        if (!avatar) {
            if (Math.abs(event.pageX - downX) < 3 && Math.abs(event.pageY - downY) < 3) {
                return;
            }
            dragZone.identifyDragElem(clientX, clientY, event);
            if (!dragZone._dragElem) {
                cleanUp();
                return;
            }
            avatar = dragZone.createAvatar(downX, downY, event);
            avatar.onDragStart();
        }
        avatar.onDragMove(event);
        dropZone = findDropZone(event);
        if (dropZone) {
            var newDropTarget = dropZone.getTargetElem(avatar);
            if (newDropTarget != dropTarget) {
                dropTarget && dropZone.onDragLeave(dropTarget, avatar);
                newDropTarget && dropZone.onDragEnter(newDropTarget, avatar);
            }
            dropTarget = newDropTarget;
            dropZone.onDragMove(dropTarget, avatar, event);
        }
        return false;
    }

    function onMouseUp(event) {
        if (event.which != 1) {
            return false;
        }
        if (avatar) {
            avatar.onDragEnd();
            if (dropZone) {
                dropZone.onDragEnd(avatar);
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
    function findDropZone(event) {
        var elem = avatar._elementUnderAvatar;
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