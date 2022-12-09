declare module "@configs/config.json" {
  type JSONType = {
      web_server: {
        port: number;
        ssl: {
          enable: boolean;
          key_path: string;
          cert_path: string;
          ssl_port: number;
        }
      },
      settings: {
        debug_mode: boolean;
        debug_logger: boolean;
        api: {
          Shark_api_address: string;
          api_key: string;
          api_id: string;
        }
      },
      maintenance_mode: {
        enable: boolean,
        res_status: number
      }
  }

  const config: JSONType;
  export = config;
}