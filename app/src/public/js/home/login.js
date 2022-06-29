"use strict";

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    loginbtn = document.querySelector("button");

loginbtn.addEventListener("click",login);

function login() {
    const req = {
        id : id.value,
        pw : pw.value
    };
    fetch("/login",{
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(req),
    // TODO: Promise 공부하기
    }).then(res => res.json())
    .then(res => {
        if(res.success === true) {
            location.href = "/";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인중 에러 발생"))
    }); 
}