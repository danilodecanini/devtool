import { NextFunction, Request, Response } from "express";

import { ApplicationError } from "@shared/errors/ApplicationError";

export function errorHandler(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response {
  if (err instanceof ApplicationError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    error: true,
    message: `Internal Server Error - ${err.message}`,
  });
}
