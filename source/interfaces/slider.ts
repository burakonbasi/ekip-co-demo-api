import { Document } from 'mongoose';

export default interface ISlider extends Document {
    productId: string;
    image: string;
}
