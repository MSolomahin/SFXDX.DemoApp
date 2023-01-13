export const breakpoints: Record<string, number> = {
  large: 1050,
  middle: 769,
  small: 481
}

export const media = Object.keys(breakpoints).reduce<Record<string, string>>(
  (acc, item) => {
    acc[item] = `@media screen and (max-width: ${breakpoints[item]}px)`
    return acc
  },
  {}
)
