const {Router} = require('express');
const UserController = require('../controllers/UserController');
const TransactionController = require('../controllers/TransactionController');
const PaymentController = require('../controllers/PaymentController');

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.destroy);

routes.post('/transaction', TransactionController.store);
routes.get('/transaction', TransactionController.index);

routes.get('/payment', PaymentController.index);
routes.post('/payment', PaymentController.store);



module.exports = routes;