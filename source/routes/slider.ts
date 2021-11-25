import express from 'express';
import controller from '../controllers/slider';

const router = express.Router();

router.post('/sliders', controller.createSlider);
router.get('/sliders', controller.getAllSliders);

export = router;
