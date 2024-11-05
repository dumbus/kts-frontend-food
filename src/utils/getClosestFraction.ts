export const getClosestFraction = (amount: number): string => {
  if (Number.isInteger(amount)) {
    return amount.toString();
  }

  const integerPart = Math.floor(amount);
  const fractionalPart = amount - integerPart;

  let closestNumerator = 1;
  let closestDenominator = 1;
  let minDifference = Math.abs(fractionalPart - closestNumerator / closestDenominator);

  for (let numerator = 1; numerator <= 9; numerator++) {
    for (let denominator = 1; denominator <= 9; denominator++) {
      if (numerator < denominator) {
        const fraction = numerator / denominator;
        const difference = Math.abs(fractionalPart - fraction);

        if (difference < minDifference) {
          minDifference = difference;
          closestNumerator = numerator;
          closestDenominator = denominator;
        }
      }
    }
  }

  return integerPart > 0
    ? `${integerPart} ${closestNumerator}/${closestDenominator}`
    : `${closestNumerator}/${closestDenominator}`;
};
