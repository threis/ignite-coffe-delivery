export function formatBRLCurrency(number: number) {
  const currencyFractionDigits = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).resolvedOptions().maximumFractionDigits

  return number.toLocaleString('de-DE', {
    maximumFractionDigits: currencyFractionDigits,
    minimumFractionDigits: 2,
  })
}
