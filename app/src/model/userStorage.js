"use strict";

class UserStorage{
    static #users = {
        id: ["하나","둘","셋"],
        pw: ["1234","13245","123456"],
        name:["우리밋","햐햐","호ㅑ햐하"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((userInfo,info)=>{
            userInfo[info] = users[info][idx];
            return userInfo;
        },{})

        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);

    }
    
}


module.exports = UserStorage;