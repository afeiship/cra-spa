# overrde

```shell
npm i -D react-app-rewired customize-cra
touch config-overrides.js
```


## basic scripts

```js
const { resolve } = require('path');
const OfflinePlugin = require('offline-plugin');
const webpack = require('webpack');
const pkg = require('./package.json');

const {
  override,
  addWebpackPlugin,
  addDecoratorsLegacy,
  addWebpackAlias,
  addWebpackExternals,
  useEslintRc,
  useBabelRc
} = require('customize-cra');

const customizeOverride = () => (config) => {
  return config;
};

module.exports = override(
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@': resolve(__dirname, 'src'),
    '#': resolve(__dirname, 'src/components'),
    components: resolve(__dirname, 'src/components'),
    environments: resolve(__dirname, 'src/environments'),
    assets: resolve(__dirname, 'src/assets'),
    images: resolve(__dirname, 'src/assets/images'),
    styles: resolve(__dirname, 'src/assets/styles'),
    views: resolve(__dirname, 'src/components/views'),
    interceptors: resolve(__dirname, 'src/components/interceptors'),
    services: resolve(__dirname, 'src/components/services'),
    mixins: resolve(__dirname, 'src/components/mixins'),
    modals: resolve(__dirname, 'src/components/modals')
  }),
  addWebpackExternals({
    react: 'React',
    'react-dom': 'ReactDOM'
  }),
  addWebpackPlugin(
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      nx: 'next-js-core2',
      mixin: 'mixin-decorator'
    })
  ),
  addWebpackPlugin(
    new OfflinePlugin({
      excludes: ['fallback.js'],
      ServiceWorker: {
        events: true
      }
    })
  ),
  useEslintRc(resolve(__dirname, '.eslintrc')),
  useBabelRc(resolve(__dirname, '.babelrc')),
  customizeOverride()
);
```