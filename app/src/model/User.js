"use strict";

const UserStorage = require("./userStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        const {id,pw} = await UserStorage.getUserInfo(client.id);
        if(id){
            if(id === client.id && pw === client.pw){
                return { success: true};
            }
            return { success: false, msg: "User password not match" };
        }
        return { success: false, msg: "User id not match" };
    }

    register(){
        const client = this.body;
        UserStorage.save(client);
    }
}

module.exports = User;