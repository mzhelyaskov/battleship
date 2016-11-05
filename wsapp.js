// module.exports = function(wsServer) {
//
//     wsServer.on('connection', function (ws) {
//         var timer = setInterval(function() {
//             ws.send(JSON.stringify(process.memoryUsage()), function (err) {
//                 // handle errors
//             });
//         }, 100);
//
//         ws.on('close', function () {
//             console.log('клиент отлючился');
//             clearInterval(timer);
//         });
//     });
// };