export function getRandomValueFromType(type: object) {
  return Object.values(type)[Math.floor(Math.random() * Object.values(type).length)]
}
