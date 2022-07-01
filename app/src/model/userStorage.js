"use strict";

const fs = require('fs').promises;

class UserStorage{
    static #getUserInfo(data,id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((userInfo,info)=>{
            userInfo[info] = users[info][idx];
            return userInfo;
        },{})
        return userInfo;
    }

    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUserInfo(id){
        // const users = this.#users;
        return fs.readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data,id);
            })
            .catch(console.err)        

    }



    static save(userInfo){
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);

    }
    
}


module.exports = UserStorage;