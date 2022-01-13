export const REGEX_FORMAT_NUMBER: RegExp = /\B(?=(\d{3})+(?!\d))/g;

/**
 * Format plain number to a number with thousand point
 * @param value Plain number
 * @param separator Thousand separator, default "."
 * @param decimalSeparator Decimal separator, default ","
 */
export const formatNumber = (
  value: string | number,
  separator: string = ",",
  decimalSeparator: string = "."
): string => {
  const valueToString = typeof value === "number" ? value.toString() : value;
  return valueToString
    .replace(".", decimalSeparator)
    .replace(REGEX_FORMAT_NUMBER, separator);
};

/**
 * Round a number
 * @param value Plain number
 * @param decimal How many decimals must shows. Default is two
 */
export const roundNumber = (value: number, decimal = 2) => {    
  //@ts-ignore
  return +(Math.round(value + `e+${decimal}`)  + `e-${decimal}`);
}