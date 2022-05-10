import { Request, Response } from 'express';

const hello = (req: Request, res: Response) => {
    res.render("home/index");
};

const login = (req: Request, res: Response) => {
    res.render("home/login");
};

module.exports ={
    hello,
    login
};