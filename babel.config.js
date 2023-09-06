module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          consts: './src/consts/',
          screens: './src/screens/',
          components: './src/components/',
          types: './src/types/',
          navigators: './src/navigators',
          store: './src/store',
          helpers: './src/helpers',
          API: './src/API',
        },
      },
    ],
  ],
};
