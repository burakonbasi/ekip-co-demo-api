import express from 'express';
import product from '../controllers/product';

const router = express.Router();

router.post('/products', product.createProduct);
router.get('/products', product.getAllProducts);
router.get('/products/:id', product.getProduct);

export = router;
