import { Document } from 'mongoose';
export declare class Task extends Document {
    description: string;
    completed: boolean;
}
