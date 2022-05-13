
class UserStorage{
    static #users:any = {
        id : ["test1","test2","test3"],
        pw : ["1234","1234","123456"],
        name:["테스트1","테스트2","테스트3"]
    };

    static getUsers(...fields: string[]): UserStorage{
        const users:any = this.#users;
        const newUsers:any = fields.reduce((newUsers:any, field:any) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

}

module.exports = UserStorage;