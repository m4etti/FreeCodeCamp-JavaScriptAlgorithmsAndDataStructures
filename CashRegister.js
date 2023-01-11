function checkCashRegister(price, cash, cid) {
    const changeValues = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];   //values in cents to avoid float errors
    let cid_now = [];   //new cid to calculate cid after change
    for (const element of cid){
        cid_now.push([element[0], element[1]*100]); //cid in cent to avoid float errors
    }
    let totalCid = 0;
    let changeAmount = cash * 100 - price * 100;
    let change = [];
    let status = "OPEN";
    let stop = false;
    for (let i in cid_now){
        totalCid += cid_now[i][1];
    }
    if (changeAmount > totalCid){ 
        status = "INSUFFICIENT_FUNDS";
    }
    else{
        while (changeAmount > 0 && !stop){  //loop until change is calculated or isn't possible
            for (let i = cid_now.length-1; i>=0; i--){
                if (cid_now[i][1] > 0 && changeAmount >= changeValues[i]){ //find largest possible money to give to change
                    changeAmount -= changeValues[i] 
                    cid_now[i][1] -= changeValues[i];
                    let index = -1;
                    for (let x = 0; x < change.length; x++){    // is the note/coin already in change 
                        if (change[x][0] == cid_now[i][0]){
                            index = x;
                            break;
                        }
                    }
                    if (index == -1){
                        change.push([cid_now[i][0],changeValues[i]]);   //if not in change create new note/coin
                    }
                    else{
                        change[index][1] += changeValues[i];    //if yeas increase amount
                    }                    
                    break;
                }
                if (i == 0){        // if i=0  and the while hasn't stopped change is not possible
                    status = "INSUFFICIENT_FUNDS";
                    change = [];
                    stop = true;
                }
            }
        }
    }
    totalCid = 0;
    for (let i in cid_now){ //calculate cash in registry after change
        totalCid += cid_now[i][1];
    }
    if (totalCid == 0){ // if no money left then CLOSED
        status = "CLOSED";
        change = cid;
    }
    else{
        for (const element of change){
            element[1] = element[1]/100;    //change back to dollars
        }
    } 

    return {status,change};
  }



 console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log("jee")