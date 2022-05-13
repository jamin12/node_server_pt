import { Request, Response } from 'express';

const UserStorage = require('../../models/UserStorage');

const output = {
    hello :(req: Request, res: Response) => {
        res.render("home/index");
    },
    
    login :(req: Request, res: Response) => {
        res.render("home/login");
    }
};




const process = {
    login: (req:Request, res:Response) => {
        const id : string = req.body.id,
            pw : string = req.body.pw;

    const users = UserStorage.getUsers("id","pw");
    
        const response:any = {};
        if(users.id.includes(id)) {
            const idx : number = users.id.indexOf(id);
            if(users.pw[idx] === pw){
                
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하였습니다."
        return res.json(response);
    }
};



module.exports ={
    output,
    process
};