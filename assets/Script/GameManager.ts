// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import {GameConfig} from "./GameConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    tip: cc.Label = null;
    @property(cc.Label)
    userName: cc.Label = null;

    @property(cc.Button)
    beginBtn: cc.Button = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private ws: WebSocket;

    start() {
        if (GameConfig.sUserName == "黄邵雄") {
            this.beginBtn.node.active = true;
        }

        this.userName.string = "欢迎  " + GameConfig.sUserName;


        let self = this;
        this.ws = new WebSocket("ws://localhost:8001");
        this.ws.onopen = function (event) {
            self.readyGame();
        };
        this.ws.onmessage = function (event) {
            self.dealMsg(event.data);
        };
        this.ws.onerror = function (event:Event) {
            self.tip.string = "Send Text fired an error";
        };
        this.ws.onclose = function (event) {
            self.tip.string = "WebSocket instance closed.";
        };

    }

    private dealMsg(event: MessageEvent) {

    }

    private readyGame() {
        this.tip.string = "连接成功";
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send("userName%" + GameConfig.sUserName);
        } else {
            this.tip.string = "WebSocket instance wasn't ready...";
        }
    }

    // update (dt) {}
}
