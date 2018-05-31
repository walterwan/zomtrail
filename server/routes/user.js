const userController = require('../controllers/user.ctrl');
const express  = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

/**
 * get all users
 */
router.route('/users')
  .get(userController.apiGetAll)
  .post(userController.apiPost);

router.route('/users/:userId')
  .get(userController.apiGet)
  .delete(userController.apiDelete)
  .patch(userController.apiUpdate);

router.route('/usersByEmail/:email')
  .get(userController.apiGetByEmail);


module.exports = router;
