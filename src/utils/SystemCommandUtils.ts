import { Logger } from "@/modules/Logger";
import * as child from "child_process";
import * as os from "os";
//import { Logger } from "@/modules/Logger";

class system_info {
  public static get_os(){
    if(os.platform() == "win32"){
      return "windows";
    }
    
    if(os.platform() == "darwin"){
      return "mac";
    }
        
    if(os.platform() == "linux"){
      return "linux";
    }
    return "unknown";
  }
}

export class main_commands {
  public static git(option: string) {
    const command = "git " + option;
    let data: string;
    try {
      data = child.execSync(command).toString();
    } catch(err) {
      Logger.SystemError("内部処理中にエラーが発生しました");
      Logger.SystemError("SystemCommandUtils.main_commands.git: Command Execution Error");
      Logger.SystemError("" + err);
      data = "Command Execution Error";
    }
    
    if(!data) {
      Logger.SystemError("内部処理中にエラーが発生しました。返却されたデータがありません");
      data = "Command Execution Error";
    }
    data = data.replace(/\r?\n/g, "");
    return data;
  }

  public static ping(server_addr: string) {
    if(!server_addr){
      return "Error: address not found";
    } else {

      let ping_cmd: string;
      let ping;
      let ping_cat;
      if(system_info.get_os() == "windows"){
        return "0ms";
      } else {
        ping_cmd = child.execSync("ping -c 1 " + server_addr + " | grep time").toString();
        ping_cat = ping_cmd.indexOf("time"); 
        ping = ping_cmd.substring(ping_cat + 5);
        ping = ping.replace(/\r?\n/g, "");
        ping = ping.replace(/ /g, "");
        ping = ping.replace("ms", "");
        ping = Number(ping);
        ping = Math.ceil(ping);
        ping = String(ping);
        ping = ping + "ms";
        return ping;
      }
    }
  }
}