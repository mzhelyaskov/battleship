var viewService = (function () {

    function createBattleFieldTable() {
        var rows = [];
        for (var row = 0; row < battleFieldSize.HEIGHT; row++) {
            var cells = [];
            for (var col = 0; col < battleFieldSize.WIDTH; col++) {
                var rowLabel = col === 0 && (row + 1);
                var colLabel = row === 0 && letters[col];
                cells.push({y: col, x: row, rowLabel: rowLabel, colLabel: colLabel});
            }
            rows.push(cells);
        }
        var battleFieldTemplate = templateEngine.get("battlefield-template");
        _("battlefield-container").innerHTML = battleFieldTemplate({rows: rows});
    }

    function createPort() {
        var port = [];
        for (var i = 0; i < collocations.length; i++) {
            var collocation = collocations[i];
            var portLine = [];
            for (var j = 0; j < collocation.count; j++) {
                portLine.push(createShip(collocation.length, HORIZONTAL));
            }
            port.push(portLine);
        }
        var portTemplate = templateEngine.get('port-template');
        _("port").innerHTML = portTemplate({port: port});
    }

    function createShip(size, position) {
        var width = 1;
        var length = size;
        var correction = {right: 0, bottom: size - 1};
        if ("h" == position) {
            width = length;
            length = 1;
            correction.right = size - 1;
            correction.bottom = 0;
        }
        return {
            id: Ship.generateId(),
            size: size,
            position: position,
            width: width * 2,
            height: length * 2,
            paddingRight: correction.right,
            paddingBottom: correction.bottom
        };
    }

    return {
        createBattleFieldTable: createBattleFieldTable,
        createPort: createPort
    };
}());