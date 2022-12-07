import { Logger } from "@/modules/Logger";
import * as config from "@configs/config.json";

export class ConfigUtils {
  public static check_config() {
    if(config.api_server.port > 65535){
      Logger.SystemError("Configエラー: ポート番号(api_server.port)が65535を超えて入力されています");
      process.exit(1);
    }
    
  }
}