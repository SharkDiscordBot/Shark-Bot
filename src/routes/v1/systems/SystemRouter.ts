import * as express from "express";
import * as Error from "@/utils/ErrorUtils";
import status from "@/routes/v1/systems/status";
const router = express.Router();

router.get("/", (req, res)  => {
  Error.HttpException.NotFound(res);
});

router.get("/status", (req, res) => {
  status(req, res);
});

export default router;