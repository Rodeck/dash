import {Response, NextFunction} from 'express';
import {UserRequest} from '../trello/models/user-request';

export function authorize(req : UserRequest, res: Response, next: NextFunction) {
  if (req.user) {
    next();
  } else {
    res.status(401).send();
  }
}

export function getUserId(req: UserRequest): string | null {
  if (req.user) {
    return req.user.uid;
  }

  return null;
}
