var hapi = require("hapi");
var server = new hapi.Server();
server.connection({
    port: 3000
});
/**
 * SERVER ROUTINGS
 */
server.route({
    method: "GET",
    path: "/",
    handler: function (request, reply) {
        reply("Hello World");
    }
});
/**
 * SERVER START-UP
 */
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log("server running at 3000");
});
