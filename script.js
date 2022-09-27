
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener('click', function(){

    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"
})

//Deposit Button

const depositBtn = document.getElementById("deposit-btn");

depositBtn.addEventListener('click', function(){

    const depositNumber = getInputNumber("deposit-amount");

    UpdateSpanText("current-deposit", depositNumber);
    UpdateSpanText("currnet-balance", depositNumber);

    document.getElementById("deposit-amount").value = "";

})

//Withdraw Button

const WithdrawBtn = document.getElementById("withdraw-btn");
WithdrawBtn.addEventListener("click", function(){

    const withdrawNumber =  getInputNumber("withdraw-amount");

    UpdateSpanText("current-withdraw", withdrawNumber);
    UpdateSpanText("currnet-balance", -1 * withdrawNumber);

    document.getElementById("withdraw-amount").value = "";
    
})

function getInputNumber(id){

    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}


function UpdateSpanText(id, depositNumber){

    const current = document.getElementById(id).innerText;

    const currentNumber = parseFloat(current);

    const totalAmount = depositNumber + currentNumber;
    
    document.getElementById(id).innerText = totalAmount;
}



