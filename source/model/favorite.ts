import mongoose, { Schema } from 'mongoose';
import IFavorite from '../interfaces/favorite';

const favoriteSchema: Schema = new Schema(
    {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'productId' }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IFavorite>('favorite', favoriteSchema);
