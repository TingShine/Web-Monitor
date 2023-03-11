import { CoreStatusEnum, IConfig } from "./types"
import { getDefaultConfig } from "./config"
import EventEmitter from "eventemitter3"

/** 单例模式 */
export class Core {
  public static version = '1.0.0'
  private config = getDefaultConfig()
  private static instance: Core
  public status = CoreStatusEnum.UNINITIALIZED

  /** 生命周期 */
  public lifeCycle = new EventEmitter()

  /** 无法通过new获取实例 */
  private constructor() {}

  /** 获取实例 */
  public static getInstance() {
    if (!Core.instance) {
      Core.instance  = new Core()
    }

    return Core.instance
  }

  /** 初始化 */
  public init(config : Partial<IConfig>) {
    this.setConfig(config)
    this.status = CoreStatusEnum.INITIALIZED
    this.lifeCycle.emit('initialized')
  }
  public static init(config : Partial<IConfig>) {
    if (!Core.instance) {
      const instance = new Core()
      Core.instance = instance
      instance.init(config)
    } else {
      Core.instance.init(config)
    }
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