import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 836271942,
  name: '我的GKD订阅',
  version: 0,
  author: 'whuerldm',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/whuerldm/gdk',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
