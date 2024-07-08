import { version } from 'react';

import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  server: { port: 3000 },
  dev: { assetPrefix: 'http://localhost:3000' },
  plugins: [pluginReact()],
  html: {
    title: 'MFE Offline Test'
  },
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'test_host',
          remotes: {
            'app_offline': 'app_offline@http://localhost:3001/manifest.json'
          },
          shared: ['react'] // comment and it will work
        })
      ]
    }
  }
});
