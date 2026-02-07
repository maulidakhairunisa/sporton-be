import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";
import { upload } from "../middlewares/upload.middleware";
import { createTransaction, getTransactions, updateTransaction, getTransactionById } from "../controllers/transaction.controller";

const router = Router();

router.post("/checkout", authenticate, upload.single("image"), createTransaction);
router.get("/", authenticate, getTransactions);
router.get("/:id", getTransactionById);
router.patch("/:id", authenticate, updateTransaction);

export default router;