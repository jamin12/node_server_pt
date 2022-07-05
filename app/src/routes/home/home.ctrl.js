"use strict";

const logger = require("../../config/logger");
const User = require('../../model/User');

const output = {
    hello: (req,res) => {
        res.render("home/index",);
    },
    login: (req,res) => {
        res.render("home/login");
    },
    register: (req,res) => {
        res.render("home/register");
    },
};

const process = {
    login: async (req,res) => {
        const user = new User(req.body);
        const response = await user.login();
        if(response.err){
            logger.error(`POST /login 500 error: "success : ${response.success}, err : ${response.err}"`);
        }
        else{
            logger.info(`POST /login 200 info: "success : ${response.success}"`);
        }
        return res.json(response);
        // const id = req.body.id,
        //     pw = req.body.pw;
        // const users = UserStorage.getUsers("id","pw");
        // const response = {}
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.pw[idx] === pw){
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }
        // response.success = false;
        // response.msg = "로그인에 실패하였습니다."
        // return res.json(response);
    },
    register: async (req,res) => {
        const user = new User(req.body);
        const response = await user.register();
        if(response.err){
            logger.error(`POST /login 500 error: "success : ${response.success}, err : ${response.err}"`);
        }
        else{
            logger.info(`POST /login 200 error: "success : ${response.success}"`);
        }
        return res.json(response);
    },
};


module.exports = {
    output,
    process
};