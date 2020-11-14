// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "./GameManager";
import {GameConfig} from "./GameConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginManager extends cc.Component {

    @property(cc.Label)
    nameLabel: cc.Label = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    addGame() {
        if (this.nameLabel.string == "") {
            console.info("请输入用户名")
            return;
        }
        GameConfig.sUserName = this.nameLabel.string;
        cc.director.loadScene("OneNight");
    }

    // update (dt) {}
}
