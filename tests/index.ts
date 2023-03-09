import Core from '../packages';

const core = Core.getInstance();
core.init({ hostUrl: 'hello' })
console.log(core.getConfig());
