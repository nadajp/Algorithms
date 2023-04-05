function checkCashRegister(price, cash, cid) {
    let change = cash - price
      
    let totalCash = cid.reduce((a,b)=> a + b[1], 0)
    let formattedTotalCash = Number.parseFloat(totalCash.toFixed(2))
    
    if (change === formattedTotalCash) 
        return {status: "CLOSED", change: cid}

    let changeDue = getChange(formattedTotalCash, change, cid)

    if (changeDue === null) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } 

    return {status: "OPEN", change: changeDue};
  }
  
  function getChange(totalCash, change, cid) {
    if (change > totalCash) return null

    console.log(cid)

    
    let changeTwoDecimals = change.toFixed(2)
    let dollarsChange = Number.parseInt(changeTwoDecimals.substring(0, changeTwoDecimals.length - 2))
    let centsChange = Number.parseInt(changeTwoDecimals.substring(changeTwoDecimals.length - 2))
    let changeDue = []

    while (dollarsChange > 0) {
        if (dollarsChange >= 100 && cid[8][1] > 0) {
            dollarsChange -= 100
            cid[8][1] -= 100
            addToChangeDue(changeDue, "ONE HUNDRED", 100)
        } else if (dollarsChange >= 20 && cid[7][1] > 0) {
            dollarsChange -= 20
            cid[7][1] -= 20
            addToChangeDue(changeDue, "TWENTY", 20)
        } else if (dollarsChange >= 10 && cid[6][1] > 0) {
            dollarsChange -= 10
            cid[6][1] -= 10
            addToChangeDue(changeDue, "TEN", 10)
        } else if (dollarsChange >= 5 && cid[5][1] > 0) {
            dollarsChange -= 5
            cid[5][1] -= 5
            addToChangeDue(changeDue, "FIVE", 5)
        } else if (dollarsChange >= 1 && cid[4][1] > 0) {
            dollarsChange -= 1
            cid[4][1] -= 1
            addToChangeDue(changeDue, "ONE", 1)
        } else 
            break
    }

    console.log('dollars change after going through dolllars register: ' + dollarsChange)
    if (dollarsChange > 0) {
        centsChange += dollarsChange * 100
    }

    console.log('cents change: ' +centsChange)
    while (centsChange > 0) {
        if (centsChange >= 25 && cid[3][1] > 0) {
            centsChange -= 25
            cid[3][1] -= 0.25
            addToChangeDue(changeDue, "QUARTER", .25)
        } else if (centsChange >= 10 && cid[2][1] > 0) {
            centsChange -= 10
            cid[2][1] -= 0.1
            addToChangeDue(changeDue, "DIME", .10)
        } else if (centsChange >= 5 && cid[1][1] > 0) {
            centsChange -= 5
            cid[1][1] -= 0.05
            addToChangeDue(changeDue, "NICKEL", .05)
        }
        else if (centsChange >= 1 && cid[0][1] > 0) {
            centsChange -= 1
            cid[0][1] -= 0.01
            addToChangeDue(changeDue, "PENNY", .01)
        }
        else return null
    }
    return changeDue
  }

  function addToChangeDue(changeDue, key, value) {
    let index = changeDue.findIndex((element) => element[0] === key)
    if (index === -1) {
        changeDue.push([key, value])
    } else {
        changeDue[index][1] += value
    }
  }

//   console.log(checkCashRegister(19.5, 20, 
//     [
//         ["PENNY", 1.01], 
//         ["NICKEL", 2.05], 
//         ["DIME", 3.1], 
//         ["QUARTER", 4.25], 
//         ["ONE", 90], 
//         ["FIVE", 55], 
//         ["TEN", 20], 
//         ["TWENTY", 60], 
//         ["ONE HUNDRED", 100]
//     ]))

    console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
    ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
    
    //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
    //["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

