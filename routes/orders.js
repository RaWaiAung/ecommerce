import express from 'express';
import { createOrder } from '../controller/orderController.js';

const orderRoute = express.Router();

// orderRoute.post('/login',verifyUser, async (req, res) => {
//     const { orderItems, shippingAddress, taxPrice, shippingPrice, totalPrice } = req.body;

//     if (orderItems && orderItems.length === 0) {
//         res.status(400).send('No order item')
//     } else {
//         const order = new Order({
//             orderItems,
//             shippingAddress,
//             taxPrice,
//             shippingPrice,
//             totalPrice
//         });
//         const createdOrder = await order.save();
//         res.status(200).json({
//             status: 'success',
//             data: createdOrder
//         })
//     }
// });

orderRoute.route('/').post(createOrder);
export default orderRoute;