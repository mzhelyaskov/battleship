// var ws = new WebSocket('ws://localhost:3000');
//
// ws.onmessage = function(event) {
//     console.log('Отправлено сообщение');
//     var memoryUsageContainer = document.getElementById('muc');
//     var memoryInfo = [];
//     var data = JSON.parse(event.data);
//     for (var key in data) {
//         if (!data.hasOwnProperty(key)) continue;
//         memoryInfo.push(key + ': ' + data[key]);
//     }
//     memoryUsageContainer.innerHTML = memoryInfo.join('<br>');
// };
//
// ws.onopen = function(event) {
//     console.log('Соединение установлено');
// };
//
// ws.onclose = function() {
//     console.log("Событие закрытия соединения");
// };
//
// ws.onerror = function(err) {
//     console.log("Ошибка: " + err.message);
// };