import type { FederationRuntimePlugin } from '@module-federation/enhanced/runtime';

const sharedStrategy: () => FederationRuntimePlugin = () => ({
  name: 'shared-strategy-plugin',
  beforeInit(args) {
    const { userOptions } = args;
    const shared = userOptions.shared;
    console.log(shared)
    if (shared) {
      Object.keys(shared).forEach((sharedKey) => {
        const sharedConfigs = shared[sharedKey];
        const arraySharedConfigs = Array.isArray(sharedConfigs)
          ? sharedConfigs
          : [sharedConfigs];
        arraySharedConfigs.forEach((s) => {
          s.strategy = 'loaded-first';
        });
      });
    }
    return args;
  },
});
export default sharedStrategy;