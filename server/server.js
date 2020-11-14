var ws = require("nodejs-websocket");
console.log("开始建立连接...")

var server = ws.createServer(function (conn) {
    conn.on("text", function (str) {
        console.log("message:" + str)
        dealText(str);
    })
    conn.on("connection", function (webSocket) {
        console.log("message:" + str)
        dealText(str);
    })
    conn.on("close", function (code, reason) {
        console.log("关闭连接")

    });
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    });
}).listen(8001)
console.log("WebSocket建立完毕");


function dealText(text) {
    var texts = text.split("%");
    switch (texts[0]) {
        case "userName":
            console.log("加入游戏", texts[1]);
            break;
        default:
            console.log("无效消息");
    }
}
