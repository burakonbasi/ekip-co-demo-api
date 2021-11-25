import mongoose, { Schema } from 'mongoose';
import IProduct from '../interfaces/product';

const ProductSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number },
        isFavorite: { type: Boolean }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IProduct>('Product', ProductSchema);
