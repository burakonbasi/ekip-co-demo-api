import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Slider from '../model/slider';

const createSlider = async (req: Request, res: Response) => {
    try {
        const { image, productId } = req.body;

        const slider = await Slider.create({
            _id: new mongoose.Types.ObjectId(),
            image,
            productId
        });
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    }
};

const getAllSliders = async (req: Request, res: Response) => {
    try {
        const slider = await Slider.find({});
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    }
};
export default { getAllSliders, createSlider };
