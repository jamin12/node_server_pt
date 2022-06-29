"use strict";

const UserStorage = require("./userStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const body = this.body;
        const {id,pw} = UserStorage.getUserInfo(body.id);
        if(id){
            if(id === body.id && pw === body.pw){
                return { success: true};
            }
            return { success: false, msg: "User password not match" };
        }
        return { success: false, msg: "User id not match" };
    }
}

module.exports = User;