import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Product from '../model/product';

const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, description, price, isFavorite } = req.body;

        const product = await Product.create({
            _id: new mongoose.Types.ObjectId(),
            name,
            description,
            price,
            isFavorite
        });
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    }
};

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const slider = await Product.find({});
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    }
};

const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        return res.status(200).send(product);
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    }
};
export default { getAllProducts, createProduct, getProduct };
