//import { Logger } from "@/modules/logger";
//import * as config from "@configs/config.json";
import * as express from "express";
import * as Error from "@/utils/ErrorUtils";
import systems from "@/routes/v1/systems/SystemRouter";

const router = express.Router();

router.get("/", (req, res)  => {
  Error.HttpException.NotFound(res);
});

router.use("/systems", systems);
export default router;