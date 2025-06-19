import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class KeyCheckerMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const key = req.headers['x-api-key'];
    if (key == "1000") {
      next();
    } else {
      res.status(401).json({
        status: 401,
        message: 'Invalid API key',
        key
      });
    }
  }
}