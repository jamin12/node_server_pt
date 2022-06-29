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

    
}


module.exports = UserStorage;