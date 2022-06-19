
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import trelloRouter from './trello/index';
import expensesRouter from './monthly_expenses/index';
import winston from 'winston';
import errorMiddleware from './middlewares/errorMiddleware';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {service: 'dash-backend'},
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({filename: 'error.log', level: 'error'}),
    new winston.transports.File({filename: 'combined.log'}),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

const app = express();

const environment = process.env.NODE_ENV ?? 'development';
const port = environment === 'development' ? 3001 : 80;

app.use(cors());
app.set('port', port);
app.use('/trello', trelloRouter);
app.use('/expenses', expensesRouter);

app.use(express.json());

app.get('/health', (req, res) => {
  res.send('Hello World from gyms service!');
});

app.use(errorMiddleware);


logger.info(`starting server on port ${port}`);

app.listen(port);
