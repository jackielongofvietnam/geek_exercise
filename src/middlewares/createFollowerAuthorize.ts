import { Injectable, NestMiddleware } from "@nestjs/common";
import { HttpStatusCode } from "axios";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class CreateFollowerAuthorize implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { authorization } = req.headers;
        if (authorization != 'Allow') {
            return res.status(403).send({ message: 'Invalid token'});
        } else {
            next();
        }      
    }
}