import express from 'express';
import * as bodyParser from 'body-parser';
import {getActiveExpense, createExpenses} from './services/expenses-service';
import { Month } from './models/month';

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
      expenses: req.body.expenses
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
