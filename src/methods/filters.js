export function currency (num) {
  var reg = /\d{1,3}(?=(\d{3})+$)/g
  return (num + '').replace(reg, '$&,')
}

export function ToLocalDate (date) {
  var localDate = new Date(date * 1000).toLocaleDateString()
  return localDate
}
