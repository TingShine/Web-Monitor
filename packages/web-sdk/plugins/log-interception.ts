import { WebMonitor } from "../index";
import { Plugin } from '../../plugin';

export class LogInterceptionPlugin extends Plugin<WebMonitor> {
  public readonly name = 'LogInterceptionPlugin';

  mount() {
    const { logInterceptor } = this.coreInstance!.getConfig()
    if (logInterceptor) {
      if (window && window.console) {
        const originLog = window.console.log
  
        window.console.log = (...args) => {
          originLog.call(window.console, ...args)
          this.coreInstance?.info(args)
        }
  
        return true
      }
    }

    return false
  }
}
