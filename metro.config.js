const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

/**
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'cjs', 'mjs', 'json', 'tff', 'svg', 'webp', 'png', 'jpg', 'gif'],
  }
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
