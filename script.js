// Balance tracking variables
let totalDeposited = 0;
let totalWithdrawn = 0;
let availableBalance = 0;

// Function to update the UI
function updateUI() {
    document.querySelector(".net-dep h2").innerHTML = `Total Deposited &colon; <br> ${totalDeposited.toFixed(2)}&dollar;`;
    document.querySelector(".net-wit h2").innerHTML = `Total Withdrawn &colon; <br> ${totalWithdrawn.toFixed(2)}&dollar;`;
    document.querySelector(".net-bal h2").innerHTML = `Available Balance &colon; <br> ${availableBalance.toFixed(2)}&dollar;`;
}

// Deposit function
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

// Withdraw function
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

// Attach event listeners to buttons
document.querySelector(".green").addEventListener("click", function(event) {
    event.preventDefault();
    depositAmount();
});

document.querySelector(".red").addEventListener("click", function(event) {
    event.preventDefault();
    withdrawAmount();
});

// Initialize UI on page load
updateUI();


// Function: Deposit & Withdraw toggle kore (Smooth Effect)
// function toggleSection(section) {
//     if (section === 'deposit') {
//         document.querySelector(".deposit").style.display = "block";
//         document.querySelector(".withdraw").style.display = "none";
//         document.querySelector(".toggle-btn.deposit-btn").classList.add("active");
//         document.querySelector(".toggle-btn.withdraw-btn").classList.remove("active");
//     } else if (section === 'withdraw') {
//         document.querySelector(".deposit").style.display = "none";
//         document.querySelector(".withdraw").style.display = "block";
//         document.querySelector(".toggle-btn.withdraw-btn").classList.add("active");
//         document.querySelector(".toggle-btn.deposit-btn").classList.remove("active");
//     }
// }

// Page load hole deposit ta dekhabe, withdraw hide thakbe
// toggleSection('deposit');

// Initial UI Update
// updateUI();