import {Month, RawMonth} from '../models/month';
import expenses from './../expenses.json';

export const getExpenses = async (): Promise<Month> => {
  const monthlyExpenses = expenses as RawMonth[];
  const defaultMonth = monthlyExpenses.find(m => m.month === 'default');

  if (defaultMonth == null) {
    throw new Error('No default month found');
  }

  const upcomingExpenses = defaultMonth.expenses.filter(e => e.day > new Date().getDate());
  const mappedMonth: Month = {
    month: 'current',
    year: new Date().getFullYear().toString(),
    expenses: defaultMonth.expenses,
    upcomingExpenses,
    totalAmount: defaultMonth.expenses.reduce((acc, e) => acc + e.amount, 0),
    totalUpcomingAmount: upcomingExpenses.reduce((acc, e) => acc + e.amount, 0),
  }

  return mappedMonth;
};