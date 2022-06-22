import {Schema, Types} from 'mongoose';

export interface Month {
    year: string;
    month: string;
    expenses: Types.DocumentArray<Expense>;
    isActive: boolean;
}

export interface Expense {
    day: number,
    amount: number,
    name: string,
}

export const schema = new Schema<Month>({
    year: {type: String, required: true},
    month: {type: String, required: true},
    isActive: Boolean,
    expenses: [{
        day: {type: Number, required: true},
        amount: {type: Number, required: true},
        name: {type: String, required: true},
    }],
});