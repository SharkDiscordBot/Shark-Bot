import { Logger } from "@/modules/Logger";
import axios from "axios";
import * as config from "@configs/config.json";
import * as system_version from "@root/system.json";
import * as export_keyv from "@/app";

export class Request {

  public static async get(shark_api_path: string) {
    
    const url = config.settings.api.Shark_api_address + shark_api_path;
    let data;
    const api_token = await export_keyv.keyv.get("api_token");
    if(!api_token){
      Logger.SystemError("エラー: APIトークンが取得されていません。数十秒待ってもエラーが発生する場合再起動を行ってください");
      const return_data = {"http_status": 500, "status": "error", "message": "Token Error"};
      return await JSON.parse(JSON.stringify(return_data));
    }
    await axios.get(url, {
      headers: {
        "User-Agent": "SharkBot/" + system_version.version,
        "authorization": api_token
      }
    })
    .then((res) => {
      data = res;
    })
    .catch((err) => {
      try {
        data = err.response;
        Logger.SystemError("APIの取得に失敗しました HTTP StatusCode: " + err.response.data.http_status);
      } catch(network_err) {
        data = {"data": {"http_status": 504, "status": "error", "message": "API Connect Error"}};
        Logger.SystemError("APIの取得に失敗しました HTTP StatusCode: unknown");
      }
    });

    if(!data) {
      data = {"data": {"http_status": 500, "status": "error", "message": "Not Data"}};
    }

    let return_data;
    try {
      return_data = JSON.parse(JSON.stringify(data.data));
    } catch(json_err) {
      data = {"http_status": 500, "status": "error", "message": "Not Data"};
      return_data = JSON.parse(JSON.stringify(data));
    }
    return await return_data;
  }

  public static async post(shark_api_path: string, post_data?: object) {
    
    const url = config.settings.api.Shark_api_address + shark_api_path;
    let data;
    const api_token = await export_keyv.keyv.get("api_token");
    if(!api_token){
      Logger.SystemError("エラー: APIトークンが取得されていません。数十秒待ってもエラーが発生する場合再起動を行ってください");
      const return_data = {"http_status": 500, "status": "error", "message": "Token Error"};
      return await JSON.parse(JSON.stringify(return_data));
    }
    if(post_data){
      await axios.post(url, post_data, {
        headers: {
          "User-Agent": "SharkBot/" + system_version.version,
          "authorization": api_token
        }
      })
      .then((res) => {
        data = res;
      })
      .catch((err) => {
        try {
          data = err.response;
        } catch(network_err) {
          data = {"data": {"http_status": 504, "status": "error", "message": "API Connect Error"}};
        }
      });
    } else {
      await axios.post(url, {
        headers: {
          "User-Agent": "SharkBot/" + system_version.version,
          "authorization": api_token
        }
      })
      .then((res) => {
        data = res;
      })
      .catch((err) => {
        try {
          data = err.response;
        } catch(network_err) {
          data = {"data": {"http_status": 504, "status": "error", "message": "API Connect Error"}};
        }
      });
    }

    if(!data) {
      data = {"data": {"http_status": 500, "status": "error", "message": "Not Data"}};
    }

    let return_data;
    try {
      return_data = JSON.parse(JSON.stringify(data.data));
    } catch(json_err) {
      data = {"http_status": 500, "status": "error", "message": "Not Data"};
      return_data = JSON.parse(JSON.stringify(data));
    }
    return await return_data;
  }

  public static async put(shark_api_path: string, put_data?: object) {
    
    const url = config.settings.api.Shark_api_address + shark_api_path;
    let data;
    const api_token = await export_keyv.keyv.get("api_token");
    if(!api_token){
      Logger.SystemError("エラー: APIトークンが取得されていません。数十秒待ってもエラーが発生する場合再起動を行ってください");
      const return_data = {"http_status": 500, "status": "error", "message": "Token Error"};
      return await JSON.parse(JSON.stringify(return_data));
    }
    if(put_data){
      await axios.post(url, put_data, {
        headers: {
          "User-Agent": "SharkBot/" + system_version.version,
          "authorization": api_token
        }
      })
      .then((res) => {
        data = res;
      })
      .catch((err) => {
        try {
          data = err.response;
        } catch(network_err) {
          data = {"data": {"http_status": 504, "status": "error", "message": "API Connect Error"}};
        }
      });
    } else {
      await axios.post(url, {
        headers: {
          "User-Agent": "SharkBot/" + system_version.version,
          "authorization": api_token
        }
      })
      .then((res) => {
        data = res;
      })
      .catch((err) => {
        try {
          data = err.response;
        } catch(network_err) {
          data = {"data": {"http_status": 504, "status": "error", "message": "API Connect Error"}};
        }
      });
    }

    if(!data) {
      data = {"data": {"http_status": 500, "status": "error", "message": "Not Data"}};
    }

    let return_data;
    try {
      return_data = JSON.parse(JSON.stringify(data.data));
    } catch(json_err) {
      data = {"http_status": 500, "status": "error", "message": "Not Data"};
      return_data = JSON.parse(JSON.stringify(data));
    }
    return await return_data;
  }

  public static async delete(shark_api_path: string, delete_data?: object) {
    
    const url = config.settings.api.Shark_api_address + shark_api_path;
    let data;
    const api_token = await export_keyv.keyv.get("api_token");
    if(!api_token){
      Logger.SystemError("エラー: APIトークンが取得されていません。数十秒待ってもエラーが発生する場合再起動を行ってください");
      const return_data = {"http_status": 500, "status": "error", "message": "Token Error"};
      return await JSON.parse(JSON.stringify(return_data));
    }
    if(delete_data){
      await axios.post(url, delete_data, {
        headers: {
          "User-Agent": "SharkBot/" + system_version.version,
          "authorization": api_token
        }
      })
      .then((res) => {
        data = res;
      })
      .catch((err) => {
        try {
          data = err.response;
        } catch(network_err) {
          data = {"data": {"http_status": 504, "status": "error", "message": "API Connect Error"}};
        }
      });
    } else {
      await axios.post(url, {
        headers: {
          "User-Agent": "SharkBot/" + system_version.version,
          "authorization": api_token
        }
      })
      .then((res) => {
        data = res;
      })
      .catch((err) => {
        try {
          data = err.response;
        } catch(network_err) {
          data = {"data": {"http_status": 504, "status": "error", "message": "API Connect Error"}};
        }
      });
    }

    if(!data) {
      data = {"data": {"http_status": 500, "status": "error", "message": "Not Data"}};
    }

    let return_data;
    try {
      return_data = JSON.parse(JSON.stringify(data.data));
    } catch(json_err) {
      data = {"http_status": 500, "status": "error", "message": "Not Data"};
      return_data = JSON.parse(JSON.stringify(data));
    }
    return await return_data;
  }


  public static async no_auth_get(shark_api_path: string) {
    
    const url = config.settings.api.Shark_api_address + shark_api_path;
    let data;
    await axios.get(url, {
      headers: {
        "User-Agent": "SharkBot/" + system_version.version
      }
    })
    .then((res) => {
      data = res;
    })
    .catch((err) => {
      try {
        data = err.response;
        Logger.SystemError("APIの取得に失敗しました HTTP StatusCode: " + err.response.data.http_status);
      } catch(network_err) {
        data = {"data": {"http_status": 504, "status": "error", "message": "API Connect Error"}};
        Logger.SystemError("APIの取得に失敗しました HTTP StatusCode: unknown");
      }
    });

    if(!data) {
      data = {"data": {"http_status": 500, "status": "error", "message": "Not Data"}};
    }

    let return_data;
    try {
      return_data = JSON.parse(JSON.stringify(data.data));
    } catch(json_err) {
      data = {"http_status": 500, "status": "error", "message": "Not Data"};
      return_data = JSON.parse(JSON.stringify(data));
    }
    return await return_data;
  }

  public static async no_auth_post(shark_api_path: string, post_data?: object) {
    
    const url = config.settings.api.Shark_api_address + shark_api_path;
    let data;
    if(post_data){
      await axios.post(url, post_data, {
        headers: {
          "User-Agent": "SharkBot/" + system_version.version
        }
      })
      .then((res) => {
        data = res;
      })
      .catch((err) => {
        try {
          data = err.response;
        } catch(network_err) {
          data = {"data": {"http_status": 504, "status": "error", "message": "API Connect Error"}};
        }
      });
    } else {
      await axios.post(url, {
        headers: {
          "User-Agent": "SharkBot/" + system_version.version
        }
      })
      .then((res) => {
        data = res;
      })
      .catch((err) => {
        try {
          data = err.response;
        } catch(network_err) {
          data = {"data": {"http_status": 504, "status": "error", "message": "API Connect Error"}};
        }
      });
    }

    if(!data) {
      data = {"data": {"http_status": 500, "status": "error", "message": "Not Data"}};
    }

    let return_data;
    try {
      return_data = JSON.parse(JSON.stringify(data.data));
    } catch(json_err) {
      data = {"http_status": 500, "status": "error", "message": "Not Data"};
      return_data = JSON.parse(JSON.stringify(data));
    }
    return await return_data;
  }
}