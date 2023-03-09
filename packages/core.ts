import { IConfig } from "./types"
import { getDefaultConfig, VERSION } from "./config"
import EventEmitter from "eventemitter3"

/** 单例模式 */
export class Core {
  public static version = VERSION
  private config = getDefaultConfig()
  private static instance: Core

  /** 生命周期 */
  public lifeCycle = new EventEmitter()

  private constructor() {}

  /** 获取实例 */
  public static getInstance() {
    if (!Core.instance) {
      return new Core()
    }

    return Core.instance
  }

  public init(config : Partial<IConfig>) {
    this.setConfig(config)
  }

  public setConfig(config: Partial<IConfig>) {
    Object.assign(this.config, config)
  }

  public getConfig() {
    return this.config
  }

  public info() {}

  public warn() {}

  public error() {}

  private reportToServer(content: any) {}
}