import * as express from "express";
import * as system_version from "@root/system.json";
import * as sys_cmd from "@/utils/SystemCommandUtils";


export default function (req: express.Request, res: express.Response) {
  res.status(200);
  res.header("Content-Type", "application/json; charset=utf-8");

  const ping = sys_cmd.main_commands.ping("8.8.8.8");
  const status_message = {"version": system_version.version, "status": "up", "ping": ping};

  res.json(status_message);
}