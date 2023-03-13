export enum LogType {
  LOG = 'log',
  WARN = 'warn',
  ERROR = 'error'
}

export enum LifeCycleEnum {
  INITIALIZED = 'initialized',
  READY = 'ready',
  DESTROY = 'destroy'
}

export enum CoreStatusEnum {
  UNINITIALIZED = 'uninitialized',
  INITIALIZED = 'initialized',
  READY = 'ready',
}

export interface IConfig {
  /** 上报地址 */
  hostUrl?: string;
  [x: string]: any;
}

export interface IPluginConfig {
  name: string
}