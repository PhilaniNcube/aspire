const formatter = (value:number) => {
  const amount = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2
}).format(value)

return amount
}


export default formatter
