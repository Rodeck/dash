import express from 'express';
import * as bodyParser from 'body-parser';
import {getExpenses} from './services/expenses-service';

// eslint-disable-next-line new-cap
const router = express.Router();

const jsonParser = bodyParser.json();

router.get('/', jsonParser, async (req, res) => {

  try {
    const expenses = await getExpenses();
    res.send(expenses);
  }
  catch
  {
    res.status(500).send('Internal server error');
  }
});

export default router;
