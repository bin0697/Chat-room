var server = require('ws').Server;
var s = new server({ port: 5001 });

s.on('connection', function(ws) {
	ws.on('message', function(message){
		console.log("received: " + message);

		s.clients.forEach(function e(client) {
			if(client != ws)
			client.send(message);
		});

		});
		ws.on('close', function() {
			console.log("i lost a client");
			});
});