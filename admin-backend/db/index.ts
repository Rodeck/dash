import { ObjectId } from 'mongodb';
import { Schema, model, connect, ConnectOptions } from 'mongoose';

const configuration = {
    url: process.env.DB_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
};

const clientOptions: ConnectOptions = {
    pass: configuration.password,
    user: configuration.username,
    dbName: 'dashboard',
};


export const init = async () => await connect(configuration.url, clientOptions);

export const insertItem = async <TItem>(item: TItem, schema: Schema<TItem>, name: string): Promise<ObjectId> => {
    const Model = model<TItem>(name, schema);
    const dbModel = new Model(item);

    await dbModel.save();

    return dbModel._id;
};

export const getItems = async <TItem>(schema: Schema<TItem>, name: string): Promise<TItem[]> => {
    const Model = model<TItem>(name, schema);

    return await Model.find({}).exec();
};
