function displayMailingLabel(name, address, city, state, zip){
    console.log(`${name}\n${address}\n${city}, ${state} ${zip}`)
}

function addNumbers(num1, num2){
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
}

function displayReceipt(totalDue, totalPaid){
    if(totalPaid < totalDue){
        console.log(`Total Due: $${totalDue}\nAmount Paid: $${totalPaid}\n\nAmount Remaining: $${(Math.round(((totalDue - totalPaid)*100))/100)}`)
    }
    else if(totalPaid > totalDue){
        console.log(`Total Due: $${totalDue}\nAmount Paid: $${totalPaid}\n\nChange Due: $${(Math.round(((totalPaid - totalDue)*100))/100)}`)
    }
    else if(totalPaid == totalDue){
        console.log(`Total Due: $${totalDue}\nAmount Paid: $${totalPaid}\n\nChange Due: None`)
    }
}

displayMailingLabel("John Linnell", "18 Apollo Avenue", "New York City", "NY", "99999")
console.log("")
displayMailingLabel("John Flansburgh", "2082 Lincoln Ln", "Sunken Manhattan", "NY", "99999")
console.log("")
addNumbers(5, 10)
console.log("")
addNumbers(9, 18)
console.log("")
displayReceipt(13.54, 10)
console.log("")
displayReceipt(80, 80)
console.log("")
displayReceipt(16000, 9.43)