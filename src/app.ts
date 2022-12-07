import "module-alias/register";
import * as express from "express";
import * as log4js from "log4js";
import * as bodyParser from "body-parser";
//import * as discord from "discord.js";
import api_v1 from "@/routes/v1Router";
import * as config from "@configs/config.json";
import * as Error from "@/utils/ErrorUtils";
import { Logger } from "./modules/Logger";
import helmet from "helmet";
import * as fs from "fs";
import * as https from "https";
import { Request } from "./modules/RequestAPI";

/* 
  express settings
  statusの返却のみに使用します
*/

const app = express();

// logger
const app_logger = log4js.getLogger("system");
app.use(log4js.connectLogger(app_logger, {level: "auto"}));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// HTTPヘッダー
app.use(helmet());

// routing
app.use("/v1", api_v1);

app.use(function(req, res) {
  Error.HttpException.NotFound(res);
});
// end

app.listen(config.web_server.port);
Logger.SystemInfo("Webサーバーを起動しました");

// HTTPSサーバーを起動
if(config.web_server.ssl.enable == true) {
  const ssl_options = {
    key: fs.readFileSync(config.web_server.ssl.key_path),
    cert: fs.readFileSync(config.web_server.ssl.cert_path)
  };
  const SSLServer = https.createServer(ssl_options, app);
  SSLServer.listen(config.web_server.ssl.ssl_port, () => {
    Logger.SystemInfo("SSLサーバーが起動しました");
  });
}

export default app;