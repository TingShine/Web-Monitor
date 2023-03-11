
export enum LogType {
  LOG = 'log',
  WARN = 'warn',
  ERROR = 'error'
}

export enum CoreStatusEnum {
  UNINITIALIZED = 'uninitialized',
  INITIALIZED = 'initialized',
  READY = 'ready',
}

export interface IConfig {
  /** 上报地址 */
  hostUrl: string;

}