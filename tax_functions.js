function getSocSecTax(grodyPay){
    return `Social Security tax: $${(Math.round(grodyPay * 0.062*100)/100)}`
}
function getMedicareTax(grodyPay){
    return `Medicare tax: $${(Math.round(grodyPay * 0.0145*100)/100)}`
}
function getFederalTax(grodyPay, withholdingCode){
    if(withholdingCode == 0)
        return `Federal tax rate: 23%\nFederal tax withholding: $${(Math.round(grodyPay * 0.23*100)/100)}`
    else if(withholdingCode == 1)
        return `Federal tax rate: 21%\nFederal tax withholding: $${(Math.round(grodyPay * 0.21*100)/100)}`
    else if(withholdingCode == 2)
        return `Federal tax rate: 19.5%\nFederal tax withholding: $${(Math.round(grodyPay * 0.195*100)/100)}`
    else if(withholdingCode == 3)
        return `Federal tax rate: 18.5%\nFederal tax withholding: $${(Math.round(grodyPay * 0.185*100)/100)}`
    else if(withholdingCode >= 4)
        return `Federal tax rate: ${18 - (0.5*(withholdingCode - 4))}%\nFederal tax withholding: $${(Math.round(grodyPay * (0.18-(0.005*(withholdingCode - 4)))*100)/100)}`
}

console.log("Gross pay: $750")
console.log(getSocSecTax(750))
console.log(getMedicareTax(750))
console.log(getFederalTax(750, 0))
console.log("Gross pay: $1550")
console.log(getSocSecTax(1550))
console.log(getMedicareTax(1550))
console.log(getFederalTax(1550, 2))
console.log("Gross pay: $1100")
console.log(getSocSecTax(1100))
console.log(getMedicareTax(1100))
console.log(getFederalTax(1100, 6))