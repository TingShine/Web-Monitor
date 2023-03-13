import { Core } from "./core";
import { IPluginConfig, LifeCycleEnum } from "./types";

export class Plugin<T extends Core = Core> {
  public readonly name: string = '';
  public actived = false;
  protected coreInstance: T | null = null;

  constructor(config: Partial<IPluginConfig> = {}) {
    this.init(config)
  }

  /** 插件参数初始化 */
  private init(config: Partial<IPluginConfig>) {}

  public install(core: T) {
    this.coreInstance = core;
    core.lifeCycle.on(LifeCycleEnum.READY, this.onReady)
    core.lifeCycle.on(LifeCycleEnum.DESTROY, this.onDestroy)
    
    return this.mount()
  }

  onReady() {
    this.actived = true;
  }

  /** 插件挂载逻辑 */
  mount(): boolean {
    return true
  }

  onDestroy() {
    this.actived = false;
    this.unmount()
  }

  /** 插件卸载逻辑 */
  unmount() {}
}