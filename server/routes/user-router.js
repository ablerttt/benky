import { Router } from "express";
import { createUser } from "../controllers/auth-controller";
import { checkIfAuthentificated } from "../middleware/auth-middleware";

const router = Router();

router.post("/auth/signup", createUser);
