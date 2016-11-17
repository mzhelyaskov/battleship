viewService.createBattleFieldTable();
viewService.createPort();

var battleField = new BattleField();
var ships = shipUtils.createShips();

new PortDragZone(document.getElementById(PORT_ZONE_ID));
new ShipDropZone(document.getElementById(BATTLE_FIELD_TABLE_ID));
new PortDragZone(document.getElementById(BATTLE_FIELD_TABLE_ID));