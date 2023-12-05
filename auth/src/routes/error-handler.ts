import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    const formattedError = err.errors.map(error => {
      return { message: error.msg, field: error.type === "field" && error.path };
    });
    return res.status(err.statusCode).send({ errors: err.serializeError() });
  }

  if (err instanceof DatabaseConnectionError) {
    return res.status(err.statusCode).send({ errors: err.serializeError() });
  }

  res.status(400).send({
    errors: [{ message: "Something went wrong." }]
  });
};
