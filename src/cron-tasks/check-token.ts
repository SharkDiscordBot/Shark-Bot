import * as Keyv from "keyv";
import axios from "axios";
import * as config from "@configs/config.json";
import { Logger } from "@/modules/Logger";
import * as system_version from "@root/system.json";
import { Request } from "@/modules/RequestAPI";

export default async function(keyv:Keyv) {

  async function login() {
    const login_req = await Request.no_auth_post("/login", {
      "api_key": config.settings.api.api_key,
      "api_id": config.settings.api.api_id
    });

    if(login_req.http_status != 200) {
      Logger.SystemError("APIサーバーのログインに失敗しました...");
      process.exit(1);
    }

    if(!login_req.token || !login_req.id) {
      Logger.SystemError("APIサーバーのログインに失敗しました...");
      process.exit(1);
    }

    await keyv.set("api_token", login_req.token)
    .then(() => {
      Logger.SystemInfo("一時データ書き込み...OK");
    })
    .catch((err) => {
      Logger.SystemError("一時データの書き込みに失敗しました");
      Logger.SystemError("" + err);
    });
  }
  
  const api_token = await keyv.get("api_token");

  if(!api_token){
    await login();
  } else {
    // APIトークン有効期限を確認,場合によって再取得

    await axios.get(config.settings.api.Shark_api_address + "/v1/systems/auth-check", {
      headers: {
        "User-Agent": "SharkBot/" + system_version.version + " AuthCheckTask",
        "authorization": api_token
      }
    })
    .then((data) => {
      if(data.data.http_status != 200) {
        Logger.SystemInfo("APIトークン確認に失敗しました...APIサーバーが動作しているか確認してください");
        process.exit(1);
      }

      if(data.data.token != "ok") {
        Logger.SystemInfo("APIトークンを再取得します...");
        login();
      }
    })
    .catch((err) => {
      Logger.SystemInfo("APIトークン確認に失敗しました...APIサーバーが動作しているか確認してください" + err);
      process.exit(1);
    });
  }
}