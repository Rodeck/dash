import {Month, schema} from '../models/month';
import {insertItem, getItems} from './../../db/index'

const name = "Month";

export const getActiveExpense = async (): Promise<Month> => {
  const items = await getItems<Month>(schema, name);

  return items.find(i => i.isActive);
};

export const createExpenses = async (month: Month): Promise<string> => {
  const itemId = await insertItem<Month>(month, schema, name);

  return itemId.toString();
};