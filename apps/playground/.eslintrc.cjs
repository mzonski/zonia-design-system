module.exports = {
  root: true,
  plugins: ['zonia'],
  extends: [
    'plugin:zonia/react',
  ],
  parserOptions: {
    project: './playground/tsconfig.json'
  },
};
