import { Document } from 'mongoose';

export default interface Ifavorite extends Document {
    favoriteObj: string;
}
