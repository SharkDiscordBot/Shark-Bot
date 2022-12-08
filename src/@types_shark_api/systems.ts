export interface info {
  os: string;
  version: string;
  hash: string;
  local_branch: string;
  time: string;
  status: string;
  http_status: number;
  message: string;
}

export interface status {
  api_status: {
    version: string;
    status: string;
    ping: string;
  }
  bot_status: {
    version: string;
    status: string;
    ping: string;
  }
  frontend_status: {
    version: string;
    status: string;
    ping: string;
  }
  time: string;
  status: string;
  http_status: number;
  message: string;
}