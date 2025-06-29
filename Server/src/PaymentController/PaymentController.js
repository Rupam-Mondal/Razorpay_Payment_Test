import razorpayInstance from "../Config/RayzorpayConfig.js";
import crypto from 'crypto';

export async function createOrder(req, res) {
    try {
        const {courseId , amount} = req.body;
        const options = {
            amount: amount * 100,
            currency: 'INR',
            receipt: `receipt_${courseId}`,
            payment_capture: 1, 
        };

        razorpayInstance.orders.create(options, (err, order) => {
            if (err) {
                console.error('Error creating order:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.status(200).json(order);
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Internal Server Error' });    
    }
}

export async function verifyPayment(req, res) {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const secret_key = process.env.RAZORPAY_KEY_SECRET;

        const hmac = crypto.createHmac('sha256', secret_key);
        hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
        const generated_signature = hmac.digest('hex');
        if (generated_signature === razorpay_signature) {
            res.status(200).json({ message: 'Payment verified successfully' });
        } else {
            res.status(400).json({ error: 'Payment verification failed' });
        }
    } catch (error) {
        console.error('Error verifying payment:', error);
        res.status(500).json({ error: 'Internal Server Error' });     
    }
}