import { Core } from "../core";
import { getWebDefaultConfig } from "./config";
import { LogInterceptionPlugin } from "./plugins/log-interception";
import { WebPerformancePlugin } from "./plugins/performance";
import { IWebConfig } from "./types";

export class WebMonitor extends Core {

  protected static instance: WebMonitor

  constructor() {
    super()
  }

  public static init(config: Partial<IWebConfig>) {
    super.init(config, WebMonitor)
  }

  /** 获取实例 */
  public static getInstance() {
    if (!WebMonitor.instance) {
      WebMonitor.instance  = new WebMonitor()
    }

    return WebMonitor.instance
  }

  protected config: IWebConfig = getWebDefaultConfig()

  protected plugins = [
    new LogInterceptionPlugin(),
    new WebPerformancePlugin()
  ]

  public getConfig(): IWebConfig {
    return this.config
  }
}