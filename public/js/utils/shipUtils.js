var shipUtils = (function () {
    return {
        createShips: function() {
            var port = _("port");
            var ships = {};
            var shipElems = port.querySelectorAll(".ship");
            for (var i = 0; i < shipElems.length; i++) {
                var shipElem = shipElems[i];
                ships[shipElem.dataset.id] = new Ship({
                    id: shipElem.dataset.id,
                    x: parseInt(shipElem.dataset.x, 10),
                    y: parseInt(shipElem.dataset.y, 10),
                    length: parseInt(shipElem.dataset.length, 10),
                    position: shipElem.dataset.position,
                    elem: shipElem
                })
            }
            return ships;
        }
    }
}());