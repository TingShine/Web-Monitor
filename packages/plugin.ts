import { Core } from "./core";
import { IPluginConfig, LifeCycleEnum } from "./types";

export class Plugin<T extends Core = Core> {
  public readonly name: string = '';
  public actived = false;
  private coreInstance: T | null = null;

  constructor(config: IPluginConfig = {}) {
    this.init(config)
  }

  private init(config: IPluginConfig) {

  }

  public install(core: T) {
    core.lifeCycle.on(LifeCycleEnum.READY, this.onReady)
    core.lifeCycle.on(LifeCycleEnum.DESTROY, this.onDestroy)
    return true
  }

  onReady() {
    this.actived = true;
  }

  mount() {}

  onDestroy() {
    this.actived = false;
    this.uninstall()
  }

  uninstall() {}
}