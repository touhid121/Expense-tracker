
let totalDeposited = 0;
let totalWithdrawn = 0;
let availableBalance = 0;

function updateUI() {
    document.querySelector(".net-dep h2").innerHTML = `Total Deposited &colon; <br> ${totalDeposited.toFixed(2)}&dollar;`;
    document.querySelector(".net-wit h2").innerHTML = `Total Withdrawn &colon; <br> ${totalWithdrawn.toFixed(2)}&dollar;`;
    document.querySelector(".net-bal h2").innerHTML = `Available Balance &colon; <br> ${availableBalance.toFixed(2)}&dollar;`;
}


function depositAmount() {
    let amount = parseFloat(document.querySelector(".dep input").value);
    if (amount > 0) {
        totalDeposited += amount;
        availableBalance += amount;
        updateUI();
        document.querySelector(".dep input").value = "";
    } else {
        alert("Please enter a valid deposit amount!");
    }
}

function withdrawAmount() {
    let amount = parseFloat(document.querySelector(".with input").value);
    if (amount > 0 && amount <= availableBalance) {
        totalWithdrawn += amount;
        availableBalance -= amount;
        updateUI();
        document.querySelector(".with input").value = "";
    } else if (amount > availableBalance) {
        alert("Insufficient balance!");
    } else {
        alert("Please enter a valid withdraw amount!");
    }
}

document.querySelector(".green").addEventListener("click", function(event) {
    event.preventDefault();
    depositAmount();
});

document.querySelector(".red").addEventListener("click", function(event) {
    event.preventDefault();
    withdrawAmount();
});

updateUI();


