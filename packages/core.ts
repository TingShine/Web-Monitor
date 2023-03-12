import { CoreStatusEnum, IConfig, LifeCycleEnum } from "./types"
import { getDefaultConfig } from "./config"
import EventEmitter from "eventemitter3"
import { Plugin } from "./plugin"

/** 单例模式 */
export class Core {
  public static version = '1.0.0'
  private config = getDefaultConfig()
  private static instance: Core
  public status = CoreStatusEnum.UNINITIALIZED

  private plugins: Plugin[] = []

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
    this.lifeCycle.emit(LifeCycleEnum.INITIALIZED)
    this.loadPlugins()
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

  /** 加载所有插件 */
  private loadPlugins() {
    if (this.status !== CoreStatusEnum.UNINITIALIZED && this.plugins.length) {
      for (const plugin of this.plugins) {
        try {
          this.usePlugin(plugin)
        } catch (err: any) {
          console.warn(`Plugin ${plugin.name} loaded failed, reason: ${err.toString()}`)
        }
      }
    }

    this.status = CoreStatusEnum.READY
    this.lifeCycle.emit(LifeCycleEnum.READY)
  }

  /** 加载插件 */
  private usePlugin(plugin: Plugin) {
    if (this.plugins.some(plu => plu.name === plugin.name)) {
      return
    }

    this.installPlugin(plugin)
  }

  /** 插件初始化执行 */
  public installPlugin(plugin: Plugin): boolean {
    try {
      const result: boolean = plugin.install(this)

      return result
    } catch (e) {
      return false
    }
  }

  public info(msg: any) {}

  public warn() {}

  public error() {}

  private reportToServer(content: any) {}
}