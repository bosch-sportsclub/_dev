import * as hapi from "hapi";

const server: hapi.Server = new hapi.Server()
server.connection({
    port: 3000
});

/**
 * SERVER ROUTINGS
 */
server.route({
    method: "GET",
    path: "/",
    handler: (request: hapi.Request, reply: hapi.IReply) => {
        reply("Hello World");
    }
});

/**
 * SERVER START-UP
 */
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log("server running at 3000");
})