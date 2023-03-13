import { onCLS, onFCP, onFID, onINP, onLCP } from 'web-vitals';
import { WebMonitor } from '..';
import { Plugin } from '../../plugin';

export class WebPerformancePlugin extends Plugin<WebMonitor> {
  public readonly name = 'WebPerformancePlugin'

  mount() {
    onCLS(this.coreInstance!.info)
    onFCP(this.coreInstance!.info)
    onFID(this.coreInstance!.info)
    onINP(this.coreInstance!.info)
    onLCP(this.coreInstance!.info)

    return true
  }
}
