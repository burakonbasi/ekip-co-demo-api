import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Categories from '../model/categories';

const createCategories = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;

        const categories = await Categories.create({
            _id: new mongoose.Types.ObjectId(),
            name,
            description
        });
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    }
};

const getAllCategoriess = async (req: Request, res: Response) => {
    try {
        const categories = await Categories.find({});
        return res.status(200).send(categories);
    } catch (err: any) {
        return res.status(500).send({ message: err.message });
    }
};

const getCategoriess = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const categories = await Categories.findById(id);
        return res.status(200).send(categories);
    } catch (err: any) {
        return res.status(500).json({
            message: err.message
        });
    }
};

export default { getAllCategoriess, createCategories, getCategoriess };
