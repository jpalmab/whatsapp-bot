const https = require("https");

function SendMessageWhatsapp(data) {

    const options = {
        host: "graph.facebook.com",
        path: "/v21.0/505299115995169/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            //autorization - personal
            Authorization: "Bearer "
        }
    };
    const req = https.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsapp
}