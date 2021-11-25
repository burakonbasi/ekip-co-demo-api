import mongoose, { Schema } from 'mongoose';
import ICategories from '../interfaces/categories';

const CategoriesSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ICategories>('Categories', CategoriesSchema);
