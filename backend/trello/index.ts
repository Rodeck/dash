import express from 'express';
import {getUserId} from '../authentication/auth';
import * as bodyParser from 'body-parser';
import {getItemsInBoard} from './services/trello-service';

// eslint-disable-next-line new-cap
const router = express.Router();
const boardId = '61b73aa8b2350d3fe681f7e9';

const jsonParser = bodyParser.json();

// router.all('/', authMiddleware);

router.get('/', jsonParser, async (req, res) => {
  const userId = getUserId(req);

  const boardItems = await getItemsInBoard(boardId);

  res.send(boardItems);
});

export default router;
