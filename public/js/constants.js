var CELL_CONTENT_CSS = ".battlefield-cell-content";
var BATTLE_FIELD_TABLE_ID = "battlefield-table";
var PORT_ZONE_ID = "port";

var letters = "А,Б,В,Г,Д,Е,Ж,З,И,К".split(",");
var HORIZONTAL = "h";
var VERTICAL = "v";

var busyStatus = {FREE: false, BUSY: true};
var shipState = {HIDDEN: -1, WOUNDED: 0, KILLED: 1};
var detectionStatus = {HIDDEN: 0, FOUNDED: 1};
var battleFieldSize = {HEIGHT: 10, WIDTH: 10};

var aroundCellsOffset = [
    [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]
];

var collocations = [{
    length: 4,
    count: 1
}, {
    length: 3,
    count: 2
}, {
    length: 2,
    count: 3
}, {
    length: 1,
    count: 4
}];