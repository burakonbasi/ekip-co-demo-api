import mongoose, { Schema } from 'mongoose';
import ISlider from '../interfaces/slider';

const SliderSchema: Schema = new Schema(
    {
        image: { type: String, required: true },
        productId: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ISlider>('Slider', SliderSchema);
