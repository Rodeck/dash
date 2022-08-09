import express from 'express';
import * as bodyParser from 'body-parser';
import {getActiveExpense, createExpenses} from './services/expenses-service';
import { Expense, Month } from './models/month';

// eslint-disable-next-line new-cap
const router = express.Router();

const jsonParser = bodyParser.json();

router.get('/', jsonParser, async (req, res) => {

  try {
    const expenses = await getActiveExpense();
    res.send(expenses);
  }
  catch
  {
    res.status(500).send('Internal server error');
  }
});

router.post('/', jsonParser, async (req, res) => {

  try {
    const month: Month = {
      isActive: true,
      month: req.body.month,
      year: req.body.year,
      expenses: req.body.expenses.map((e: Expense) => ({
        day: e.day,
        amount: e.amount,
        name: e.name,
      })),
      createdDate: new Date(),
    }
    const id = await createExpenses(month);
    res.send(id);
  }
  catch
  {
    res.status(500).send('Internal server error');
  }
});

export default router;
