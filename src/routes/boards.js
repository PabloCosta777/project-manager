const router = require("express").Router();
const def = require('../helpers/defaultResponse')
const getBoard=require('../controllers/getBoards')
const postBoard=require('../controllers/postBoard')
const pathcBoard=require('../controllers/patchBoard')
const deleteBoard=require('../controllers/deleteBoard')
const load =require('../helpers/bulkData')

router.get('/',getBoard)
router.get('/load',load)
router.post('/',postBoard)
router.patch('/',pathcBoard)
router.delete('/:id',deleteBoard)

module.exports = router;
