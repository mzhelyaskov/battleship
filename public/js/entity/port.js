function Port() {
    this.ships = {};
    this.elem = document.getElementById("port");

    (function constructor() {
        var portLines = [];
        var shipLineTemplate = templateEngine.get('port-line');
        for (var i = 0; i < collocations.length; i++) {
            var collocation = collocations[i];
            var portLineShips = [];
            for (var j = 0; j < collocation.count; j++) {
                var ship = new Ship({
                    state: shipStatus.HIDDEN,
                    length: collocation.length,
                    position: HORIZONTAL,
                    coords: []
                });
                this.ships[ship.id] = ship;
                portLineShips.push(getShipTemplateData(ship));
            }
            portLines.push(shipLineTemplate({ships: portLineShips}));
        }
        this.elem.innerHTML = portLines.join('');
    }).call(this);

    function getShipTemplateData(ship) {
        var width = 1;
        var length = ship.length;
        var correction = {right: 0, bottom: ship.length - 1};
        if ("h" == ship.position) {
            width = ship.length; length = 1; correction.right = ship.length - 1; correction.bottom = 0;
        }
        var scale = 2;
        return {
            id: ship.id,
            size: ship.length,
            position: ship.position,
            className: 'ship draggable',
            width: width * scale,
            height: length * scale,
            paddingRight: correction.right,
            paddingBottom: correction.bottom
        };
    }
}

Port.prototype.contains = function(id) {
    return !!this.ships[id];
};



