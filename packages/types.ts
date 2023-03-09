
export enum LogType {
  LOG = 'log',
  WARN = 'warn',
  ERROR = 'error'
}

export interface IConfig {
  /** 上报地址 */
  hostUrl: string;

}