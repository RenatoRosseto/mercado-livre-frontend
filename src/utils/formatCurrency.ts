export const formatCurrency = (value: number, currency = 'BRL'): string => {
  if (currency === 'BRL') {
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency,
    }).format(value);
    return formattedValue;
  } else {
    return value + '';
  }
};
