import express from 'express';
import controller from '../controllers/categories';
import product from '../controllers/product';

const router = express.Router();

router.post('/categories', controller.createCategories);
router.get('/categories', controller.getAllCategoriess);
router.get('/categories/:id', controller.getCategoriess);
router.get('/categories/:id/products', product.getProduct);

export = router;
