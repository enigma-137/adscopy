// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: '/prompt/:text*',
        destination: '/api/prompt/:text*',
      },
    ];
  },
};
