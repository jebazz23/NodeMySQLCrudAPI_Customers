const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');

// Create a new Customer
router.post('/', customerController.createCustomer);

// Retrieve all Customers
router.get('/', customerController.findAllCustomers);

// Retrieve a single Customer with customerId
router.get('/:customerId', customerController.findOneCustomer);

// Update a Customer with customerId
router.put('/customer/:customerId', customerController.updateCustomer);

// Delete a Customer with customerId
router.delete('/customers/:customerId', customerController.deleteCustomer);

// Delete all customers
router.delete('/customer', customerController.deleteAllCustomers);

module.exports = router;