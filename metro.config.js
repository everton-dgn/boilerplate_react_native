const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

/**
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'cjs', 'mjs', 'json'],
  }
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
