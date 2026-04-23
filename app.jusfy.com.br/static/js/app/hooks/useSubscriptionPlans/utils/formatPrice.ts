interface FormatPriceOptions {
  removeSpaces?: boolean;
}

export const formatPrice = (value: number, options: FormatPriceOptions = {}): string => {
  const { removeSpaces = false } = options;
  const prefix = 'R$';
  const spaceString = removeSpaces ? '' : ' ';

  return `${prefix}${spaceString}${value
    .toFixed(2)
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

