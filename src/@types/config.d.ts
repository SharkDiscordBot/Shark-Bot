declare module "@configs/config.json" {
  type JSONType = {
      api_server: {
        port: number;
      },
      settings: {
        debug_mode: boolean;
        debug_logger: boolean;
      },
      maintenance_mode: {
        enable: boolean,
        res_status: number
      }
  }

  const config: JSONType;
  export = config;
}