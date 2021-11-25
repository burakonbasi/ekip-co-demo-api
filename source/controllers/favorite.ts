import { Request, Response } from 'express';
import Favorite from '../model/favorite';

const createFavorite = async (req: Request, res: Response) => {
    try {
        const { productId } = req.body;

        const favorite = await Favorite.create({
            productId
        });

        return res.status(200).send(favorite);
    } catch (err: any) {
        return res.status(500).send({ message: err.message });
    }
};

const getAllFavorites = async (req: Request, res: Response) => {
    try {
        const favorites = await Favorite.find({});
        return res.status(200).send(favorites);
    } catch (err: any) {
        return res.status(500).send({ message: err.message });
    }
};
export default { getAllFavorites, createFavorite };
