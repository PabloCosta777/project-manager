const router = require("express").Router();
const def = require('../helpers/defaultResponse')
const getBoard=require('../controllers/getBoards')
const postBoard=require('../controllers/postBoard')
const load =require('../helpers/bulkData')

router.get('/',getBoard)
router.get('/load',load)
router.post('/',postBoard)
router.patch('/',def)
router.delete('/',def)
//comentario random
module.exports = router;
