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
            '.tff',
            '.svg',
            '.webp',
            '.png',
            '.jpg',
            '.gif',
            '.android.js',
            '.android.tsx'
          ]
        }
      ]
    ]
  }
}
