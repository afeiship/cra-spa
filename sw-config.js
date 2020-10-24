module.exports = {
  runtimeCaching: [
    {
      urlPattern: /cloudflare\.com/,
      handler: 'networkFirst'
    }
  ]
};
