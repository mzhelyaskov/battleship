
module.exports = function (ws) {
    
    var timer = setInterval(function() {
        ws.send(JSON.stringify(process.memoryUsage()), function (err) {
            // handle errors
        });
    }, 1000);
    
    ws.on('close', function () {
        console.log('клиент отлючился');
        clearInterval(timer);
    });
};