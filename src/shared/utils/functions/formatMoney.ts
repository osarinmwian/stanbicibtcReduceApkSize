export const FormatMoney = (number: number, symbol = null): string => {
  number = !number ? 0 : number;
  if (symbol) {
    return symbol + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67
  } else {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67
  }
};
