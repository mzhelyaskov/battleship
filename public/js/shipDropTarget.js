function BattleFieldDropTarget(elem) {
    DropTarget.apply(this, arguments);
}

extend(BattleFieldDropTarget, DropTarget);

BattleFieldDropTarget.prototype._showHoverIndication = function() {
    // this._targetElem && this._targetElem.classList.add('hover');
};

BattleFieldDropTarget.prototype._hideHoverIndication = function() {
    // this._targetElem && this._targetElem.classList.remove('hover');
};

BattleFieldDropTarget.prototype._getTargetElem = function(avatar, event) {
    // var target = avatar.getTargetElem();
    // if (target.tagName != 'TABLE') {
    //     return;
    // }
    // // проверить, может быть перенос узла внутрь самого себя или в себя?
    // var elemToMove = avatar.getDragInfo(event).dragZoneElem.parentNode;
    // var elem = target;
    // while (elem) {
    //     if (elem == elemToMove) return; // попытка перенести родителя в потомка
    //     elem = elem.parentNode;
    // }
    // return target;
};

BattleFieldDropTarget.prototype.onDragEnd = function(avatar, event) {
    avatar.placeholder.parentNode.insertBefore(avatar._elem, avatar.placeholder.nextSibling);
    avatar._elem.style.position = avatar.placeholder.style.position;
    avatar._elem.style.left = avatar.placeholder.style.left;
    avatar._elem.style.top = avatar.placeholder.style.top;
    avatar.placeholder.parentNode.removeChild(avatar.placeholder);
    addShipToMap(avatar);
    // avatar.placeholder = null;
    

    
    // if (!this._targetElem) {
    //     // перенос закончился вне подходящей точки приземления
    //     avatar.onDragCancel();
    //     return;
    // }
    // // получить информацию об объекте переноса
    // var avatarInfo = avatar.getDragInfo(event);
    // avatar.onDragEnd(); // аватар больше не нужен, перенос успешен
    // // вставить элемент в детей в отсортированном порядке
    // var elemToMove = avatarInfo.dragZoneElem.parentNode; // <LI>
    // var title = avatarInfo.dragZoneElem.innerHTML; // переносимый заголовок
    // // получить контейнер для узлов дерева, соответствующий точке преземления
    // var ul = this._targetElem.parentNode.getElementsByTagName('UL')[0];
    // if (!ul) { // нет детей, создадим контейнер
    //     ul = document.createElement('UL');
    //     this._targetElem.parentNode.appendChild(ul);
    // }
    // // вставить новый узел в нужное место среди потомков, в алфавитном порядке
    // var li = null;
    // for (var i = 0; i < ul.children.length; i++) {
    //     li = ul.children[i];
    //     var childTitle = li.children[0].innerHTML;
    //     if (childTitle > title) {
    //         break;
    //     }
    //     li = null;
    // }
    // ul.insertBefore(elemToMove, li);
    // this._targetElem = null;
};

BattleFieldDropTarget.prototype.onDragMove = function (avatar, event) {
    var shipElem = avatar._elem;
    var shipCenter = getShipCoordCenter(shipElem);
    if (avatar.placeholder.parentNode) {
        avatar.placeholder.parentNode.removeChild(avatar.placeholder);
    }
    // shipElem.removeClass("ship-box__transparent");
    var battleFieldCells = this._elem.querySelectorAll(".battlefield-cell");
    battleFieldCells.forEach(function(cell) {
        if (shipPlaceholderInCellZone(cell, shipCenter.Y, shipCenter.X)) {
            var dataY = parseInt(cell.getAttribute("data-y"), 10);
            var dataX = parseInt(cell.getAttribute("data-x"), 10);
            var shipLength = parseInt(shipElem.getAttribute("data-length"), 10);
            var shipPosition = shipElem.getAttribute("data-position");
            if (isCellSuitableForShip(dataY, dataX, shipLength, shipPosition, true)) {
                cell.querySelector(".battlefield-cell-content").appendChild(avatar.placeholder);
                // shipElem.classList.add("ship-box__transparent");
            }
        }
    });
};