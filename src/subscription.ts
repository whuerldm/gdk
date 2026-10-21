
import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);

// 默认只启用开屏广告，其余规则保留但关闭
apps.forEach((app) => {
  app.groups?.forEach((group) => {
    group.enable = group.name.startsWith('开屏广告');
  });
});

export default defineGkdSubscription({
  id: 836271942,
  name: '我的GKD订阅',
  version: 0,
  author: 'whuerldm',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/whuerldm/gdk',
  categories,
  globalGroups,
  apps,
});
