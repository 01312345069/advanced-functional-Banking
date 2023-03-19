// #1 add event listener to the deposit button 
// #2 get deposit amount from the deposit input field 
// #2.1 convert string deposit amount to a number type 
// #3 clear the deposit input field after getting the value 
// #4 get the previous deposit total
// #5 calculate new deposit total and set the value to the deposit total 

// step-1:
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2: 
    const depositField = document.getElementById('deposit-field');
    const NewDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(NewDepositAmountString);

    // step-3: 
    depositField.value = '';

    // step-4: 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-5: 
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
})

/*
    // step - 3: get the current deposit total 
    // for non-input (Element other than input, textarea) use innerText to get the text 
    

    // Step-4: add numbers to set the total deposit
    const currentDepositeTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total 
    depositTotalElement.innerText = currentDepositeTotal;

    // Step-5: get balance current total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-6: calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;

    // Last Step-$ clear the deposit filed 
    depositField.value = '';
})

*/