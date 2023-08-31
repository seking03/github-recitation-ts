// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
import * as express from 'express';
import {Request, Response} from 'express';

export default (req: Request, res: Response) => {
  const { num } = req.params;
  const fibN = fibonacci(parseInt(num as string));
  let result = `fibonacci(${num as number}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num as number}) is undefined`;
  }

  res.send(result as string);
};
