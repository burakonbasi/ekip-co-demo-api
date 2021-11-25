import express from 'express';
import controller from '../controllers/favorite';

const router = express.Router();

router.post('/favorite', controller.createFavorite);
router.get('/favorites', controller.getAllFavorites);

export = router;
