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
import * as api_systems_model from "@/@types_shark_api/systems";
import * as system_version from "@root/system.json";
import { main_commands } from "./utils/SystemCommandUtils";
import * as cron from "node-cron";
import * as Keyv from "keyv";
import check_token from "@/cron-tasks/check-token";
import { ConfigUtils } from "./sub-system/Config-Utils";

/* 
  System Check
*/
ConfigUtils.check_config();

/*
  Keyv Init
*/
export const keyv = new Keyv();
keyv.on("error", (err) => {
  Logger.SystemError("起動処理中にエラーが発生しました: Keyvの起動に失敗しました");
  Logger.SystemError("" + err);
});

/* 
  express settings
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

// 起動成功メッセージ兼API疎通確認

async function hello_msg() {
  
  let data:api_systems_model.info = await Request.no_auth_get("/v1/systems/info");
  data = JSON.parse(JSON.stringify(data));
  
  if(data.http_status != 200) {
    Logger.SystemError("APIサーバーとの通信に失敗しました");
    Logger.SystemError("configのAPIサーバーに誤りはないか、APIサーバーが起動しているか確認してください");
    Logger.Debug(data.message);
    process.exit(1);
  } else {
    Logger.SystemInfo("APIサーバーとの通信に成功しました");
  }

  Logger.SystemInfo("==============================");
  Logger.SystemInfo("SharkBot https://github.com/SharkDiscordBot/Shark-Bot ");
  Logger.SystemInfo("");
  if(system_version.beta == true) {
    Logger.SystemInfo("現在使用中のバージョンは ベータ版 です。");
  }
  Logger.SystemInfo("SharkBotバージョン: " + system_version.version);
  Logger.SystemInfo("SharkBot hash: " + main_commands.git("show --format='%H' --no-patch"));
  Logger.SystemInfo("SharkAPIバージョン: " + data.version);
  Logger.SystemInfo("SharkAPI hash: " + data.hash);
  Logger.SystemInfo("==============================");
}

hello_msg();

// 初回取得
check_token(keyv);

// cron

// 0,20,40秒に実行

cron.schedule("0,20,40 * * * * *", () => {
  check_token(keyv);
});

export default app;