"use strict";

const users = {
    id: ["하나","둘","셋"],
    pw: ["1234","13245","123456"]
};

const output = {
    hello: (req,res) => {
        res.render("home/index.ejs",);
    },
    login: (req,res) => {
        res.render("home/login.ejs");
    }
};

const process = {
    login: (req,res) => {
        const id = req.body.id,
            pw = req.body.pw;

        if(users.id.includes){
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw){
                return res.json({
                    success: true
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다."
        });
    },
};


module.exports = {
    output,
    process
};