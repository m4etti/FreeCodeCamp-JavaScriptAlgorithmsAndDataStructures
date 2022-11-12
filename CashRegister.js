function checkCashRegister(price, cash, cid) {
    const changeValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let totalCid = 0;
    let changeAmount = cash - price;
    let change = [];
    let status = "OPEN";
    let stop = false;
    for (let i in cid){
        totalCid += cid[i][1];
    }
    if (changeAmount > totalCid){ 
        status = "INSUFFICIENT_FUNDS";
    }
    else{
        while (changeAmount > 0 && !stop){
            for (let i = cid.length-1; i>=0; i--){
                if (cid[i][1] > 0 && changeAmount >= changeValues[i]){
                    changeAmount -= changeValues[i];
                    cid[i][1] -= changeValues[i];
                    let index = -1;
                    for (let x = 0; x < change.length; i++){
                        if (change[x][0] == cid[i][0]){
                            index = x;
                            break;
                        }
                    }
                    if (index == -1){
                        change.push([cid[i][0],changeValues[i]]);
                    }
                    else{
                        change[index][1] += changeValues[i];
                    }                    
                    break;
                }
                if (i == 0){
                    status = "INSUFFICIENT_FUNDS";
                    change = [];
                    stop = true;
                }
            }
        }
    }
    



    return {status,change};
  }



 console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));