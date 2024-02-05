import express, { Request, Response } from "express";
import { requireAuth } from "@shahzaibshaikh-ticketing/common";

const router = express.Router();

router.post("/api/tickets", requireAuth, (req: Request, res: Response) => {
  res.send({}).status(200);
});

export { router as createTicketRouter };
