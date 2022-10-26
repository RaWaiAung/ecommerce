import Order from '../model/order.js';

export const createOrder = async (req, res) => {
    const { orderItems, shippingAddress, taxPrice, shippingPrice, totalPrice } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400).send('No order item')
    } else {
        const order = new Order({
            orderItems,
            shippingAddress,
            taxPrice,
            shippingPrice,
            totalPrice
        });
        const createdOrder = await order.save();
        res.status(200).json({
            status: 'success',
            data: createdOrder
        })
    }
};