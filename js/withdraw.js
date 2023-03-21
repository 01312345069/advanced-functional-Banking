/*
1. add event handler with the withdraw button

2. get the withdraw amount from the withdraw input field 

3.  clear the withdraw input field

4. get previous withdraw total  

5. calculate total  withdraw amount and set it to the withdraw total element.

6. get previous balance

7. Calculate new balance and set it to the balance total element
*/

// step - 1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step-3:
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-4: 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWihdrawTotal = parseFloat(previousWithdrawTotalString);


    // step - 5
    const newWithdrawTotal = previousWihdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;


    // step-6:

    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Not Enough Money!');
        return;
    }


    // step-7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;



})