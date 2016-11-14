var busyAndFreeCellsMap = [];

var battleField = new BattleField();
var port = new Port();

new PortDragZone(document.getElementById(PORT_ZONE_ID));
new ShipDropZone(document.getElementById(BATTLE_FIELD_TABLE_ID));
new PortDragZone(document.getElementById(BATTLE_FIELD_TABLE_ID));