module.exports = api => {
  api.cache(true)
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx'
          ]
        }
      ]
    ]
  }
}
