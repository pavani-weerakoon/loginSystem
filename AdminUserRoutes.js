const express = require('express');
const AdminController = require('../controller/AdminController');
const router = express.Router();

router.post('/user', AdminController.user);
router.get('/loginuser', AdminController.loginuser);
module.exports = router;
