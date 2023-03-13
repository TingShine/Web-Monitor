import WebMonitor from '../packages';

WebMonitor.init({
  hostUrl: 'hello-world',
  logInterceptor: true,
})
const monitor = WebMonitor.getInstance();

console.log(monitor);
