export const calculate = (operator: string, num1, num2) => {
  switch (operator) {
    case '×':
      return Number(num1) * Number(num2);
    case '÷':
      return Number(num1) / Number(num2);
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return Number(num1) - Number(num2);
  }
};
