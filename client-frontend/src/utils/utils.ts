export const getAssestsFile = (url: string) => {
  return new URL(`../assets/images/${url}`, import.meta.url).href
}

export const convertUSDToNumber = (usdString: string) => {
  const num = parseFloat(usdString.replace(/[^\d.-]/g, ''))
  return !isNaN(num) ? num : 0
}

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomDecimal = (min: number, max: number) => {
  const randomNumber = (Math.random() * (max - min) + min).toFixed(2)
  return parseFloat(randomNumber)
}
