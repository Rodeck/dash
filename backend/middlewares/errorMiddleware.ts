import {UserRequest} from '../trello/models/user-request';
import {Response, NextFunction} from 'express';
import {createLogger} from '../logger';

const logger = createLogger();

export default async function(error: Error, req : UserRequest, res: Response, next: NextFunction)
: Promise<void> {
  const message = error.message || 'Something went wrong';
  logger.error(message, error);
  res
      .status(500)
      .send({
        message,
      });
}
