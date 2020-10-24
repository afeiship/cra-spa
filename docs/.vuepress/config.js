module.exports = {
  plugins: ['@vuepress/back-to-top'],
  base: '/webpack-react-es6/',
  title: 'webpack-react-es6',
  description: 'Webpack react es6 seed.',
  themeConfig: {
    sidebar: [
      {
        title: 'Get started',
        collapsable: false,
        children: [
          '/get-started/01-install-vuepress.md',
          '/get-started/02-init-webpack.md',
          '/get-started/03-install-env.md',
          '/get-started/04-install-babel.md',
          '/get-started/05-install-clean.md',
          '/get-started/06-webpack-ejs.md'
        ]
      },
      {
        title: 'Dotfiles',
        collapsable: false,
        children: [
          '/dotfiles/01-npmrc.md',
          '/dotfiles/02-prettier.md',
          '/dotfiles/03-editorconfig.md'
        ]
      }
    ]
  }
};
