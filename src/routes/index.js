//const verifyToken = require("../Middleware/auth");
const router = require("express").Router();
const boardRouter =require('./boards')
const userRouter =require('./user')

router.use('/board',boardRouter)
router.use('/user', userRouter)

module.exports = router
