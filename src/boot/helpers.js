export function addSpaceToText(text, characterWidth = 4) {
  return text.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '').trim()
}

export const formatCurrency = (
  amount,
  currencyName = 'USD',
  languageLocale = 'en-US',
  isGrouped = true,
  maximumSignificantDigits = 3
) =>
  Intl.NumberFormat(languageLocale, {
    style: 'currency',
    currency: currencyName,
    useGrouping: isGrouped,
    maximumSignificantDigits: maximumSignificantDigits,
  }).format(amount);

function padDigits(num, pad = 2) {
  return num.toString().padStart(pad, '0');
}

export function formatDate(date, separator = '-') {
  const newDate = new Date(date);

  return [
    padDigits(newDate.getFullYear(), 4),
    padDigits(newDate.getMonth() + 1),
    padDigits(newDate.getDate()),
  ].join(separator);
}
