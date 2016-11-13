
var rows = [];
busyAndFreeCells = [];

createBattleField();
collocateShips();

new PortDragZone(document.getElementById("port"));
new ShipDropZone(document.getElementById('battlefield-table'));
new PortDragZone(document.getElementById('battlefield-table'));








































// function getCords(elem) { // кроме IE8-
//     var box = elem.getBoundingClientRect();
//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };
// }
//
// var DragManager = new function() {
//     var dragObject = {};
//     var self = this;
//
//     document.onmousedown = onMouseDown;
//     document.onmousemove = onMouseMove;
//     document.onmouseup = onMouseUp;
//
//     function onMouseDown(e) {
//         if (e.which != 1) return;
//         var elem = e.target.closest('.draggable');
//         if (!elem) return;
//         dragObject.elem = elem;
//         dragObject.downX = e.pageX;
//         dragObject.downY = e.pageY;
//     }
//
//     function onMouseMove(e) {
//         if (!dragObject.elem) return;
//         if (!dragObject.avatar) {
//             var moveX = e.pageX - dragObject.downX;
//             var moveY = e.pageY - dragObject.downY;
//             if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
//                 return;
//             }
//             dragObject.avatar = createAvatar(e);
//             if (!dragObject.avatar) {
//                 dragObject = {};
//                 return;
//             }
//             var cords = getCords(dragObject.avatar);
//             dragObject.shiftX = dragObject.downX - cords.left;
//             dragObject.shiftY = dragObject.downY - cords.top;
//             document.body.appendChild(dragObject.avatar);
//             dragObject.avatar.style.zIndex = 9999;
//             dragObject.avatar.style.position = 'absolute';
//         }
//         dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
//         dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';
//
//
//         var newDropTarget = findDropTarget(e);
//         if (newDropTarget != dropTarget) {
//             // уведомить старую и новую зоны-цели о том, что с них ушли/на них зашли
//             dropTarget && dropTarget.onDragLeave(newDropTarget, avatar, e);
//             newDropTarget && newDropTarget.onDragEnter(dropTarget, avatar, e);
//         }
//         dropTarget = newDropTarget;
//         dropTarget && dropTarget.onDragMove(avatar, e);
//
//         return false;
//     }
//
//     function createAvatar(e) {
//         var avatar = dragObject.elem;
//         var old = {
//             parent: avatar.parentNode,
//             nextSibling: avatar.nextSibling,
//             position: avatar.position || ''
//             // left: avatar.left || '',
//             // top: avatar.top || '',
//             // zIndex: avatar.zIndex || ''
//         };
//         avatar.rollback = function() {
//             old.parent.insertBefore(avatar, old.nextSibling);
//             avatar.style.position = old.position;
//             // avatar.style.left = old.left;
//             // avatar.style.top = old.top;
//             // avatar.style.zIndex = old.zIndex
//         };
//         return avatar;
//     }
//
//     function onMouseUp(e) {
//         if (dragObject.avatar) {
//             var dropElem = findBattleField(e);
//             if (!dropElem) {
//                 self.onDragCancel(dragObject);
//             } else {
//                 self.onDragEnd(dragObject, dropElem);
//             }
//         }
//         dragObject = {};
//     }
//
//     function findBattleField(event) {
//         dragObject.avatar.hidden = true;
//         var elem = document.elementFromPoint(event.clientX, event.clientY);
//         dragObject.avatar.hidden = false;
//         if (elem == null) {
//             return null;
//         }
//         return elem.closest('.battlefield-table');
//     }
//
//     this.onDragEnd = function(dragObject, dropElem) {};
//     this.onDragCancel = function(dragObject) {};
// };
//
// DragManager.onDragCancel = function (dragObject) {
//     dragObject.avatar.rollback();
// };
//
// DragManager.onDragEnd = function (dragObject, dropElem) {
    // dragObject.elem.style.display = 'none';
    // dropElem.classList.add('computer-smile');
    // setTimeout(function() {
    //     dropElem.classList.remove('computer-smile');
    // }, 200);
// };
















// var ball = document.getElementById('ball');
// ball.onmousedown = function(event) {
//     ball.ondragstart = function() {
//         return false;
//     };
//
//     ball.style.position = 'fixed';
//     ball.style.zIndex = 9999;
//     var cords = getCords(ball);
//     var shiftX = event.clientX - cords.left;
//     var shiftY = event.clientY - cords.top;
//     document.body.appendChild(ball);
//     moveAt(event);
//
//     function moveAt(event) {
//         ball.style.left = Math.max(0, event.clientX - shiftX) + 'px';
//         ball.style.top = Math.max(0, event.clientY - shiftY) + 'px';
//     }
//
//     document.onmousemove = function(event) {
//         moveAt(event);
//     };
//
//     ball.onmouseup = function() {
//         document.onmousemove = null;
//         ball.onmouseup = null;
//     };
// };
//
// function getCords(elem) { // кроме IE8-
//     var box = elem.getBoundingClientRect();
//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };
// }