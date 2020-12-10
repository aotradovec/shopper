export function roundTo(decimalNumber: number, fixedDecimalPlaces: number) {
  return parseFloat(decimalNumber.toString()).toFixed(fixedDecimalPlaces);
}
