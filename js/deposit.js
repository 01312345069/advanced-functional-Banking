/*
#1 add event listener to the deposit button 


#2 get deposit amount from the deposit input field 

#2.1 convert string deposit amount to a number type 

#3 clear the deposit input field after getting the value 

#4 get the previous deposit total

#5 calculate new deposit total and set the value to the deposit total 

#6 get current balance total 

#7 calculate new balance and set it to the balance total element. Last EditDate: 21 March 2023 by Naymul Islam.

*/

// step-1:
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2: 
    const depositField = document.getElementById('deposit-field');
    const NewDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(NewDepositAmountString);

    // step-3: 
    depositField.value = '';
    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-4: 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-5: 
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step-6: 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-7:
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = newBalanceTotal;
})

