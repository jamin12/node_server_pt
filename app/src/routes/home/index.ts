import express from 'express';
// const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl')


router.get('/', ctrl.output.hello);
router.get("/login",ctrl.output.login);
router.post("/login",ctrl.process.login);

// 외부로 내보낼 수 있게 해주는 코드
module.exports = router;