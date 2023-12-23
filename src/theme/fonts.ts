const familiesWeights = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold'
} as const

const sizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 22
} as const

const fonts = {
  familiesWeights,
  sizes
} as const

export default fonts
