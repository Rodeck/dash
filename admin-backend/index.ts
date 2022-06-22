
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import expensesRouter from './monthly_expenses/index';
import winston from 'winston';
import errorMiddleware from './middlewares/errorMiddleware';
import { init } from './db/index';

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
const port = environment === 'development' ? 3002 : 80;

app.use(cors());
app.set('port', port);
app.use('/expenses', expensesRouter);

app.use(express.json());

app.get('/health', (req, res) => {
  res.send('Hello World from admin service!');
});

app.use(errorMiddleware);

init().then(() => {
  logger.info(`starting server on port ${port}`);
  app.listen(port);
});


