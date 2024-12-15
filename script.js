// Function to show the popup when the page loads
window.onload = function() {
    document.getElementById('login-popup').style.display = 'flex';
};

// Function to handle the login process
function login() {
    const phoneNumber = document.getElementById('phone-number').value;
    if (phoneNumber) {
        alert("Login successful!"); // This is just a placeholder; you can handle login logic here
        document.getElementById('login-popup').style.display = 'none'; // Hide the popup after login
    } else {
        alert("Please enter your phone number.");
    }
}
// Enable/disable return date based on trip type
document.querySelectorAll('input[name="trip"]').forEach((input) => {
    input.addEventListener("change", () => {
        const returnField = document.getElementById("return");
        returnField.disabled = input.value !== "round-trip";
    });
});

// Swap 'From' and 'To' fields
document.getElementById("swap-button").addEventListener("click", () => {
    const fromField = document.getElementById("from");
    const toField = document.getElementById("to");
    [fromField.value, toField.value] = [toField.value, fromField.value];
});

// Show alert when search button is clicked
document.getElementById("search-flights").addEventListener("click", () => {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const departure = document.getElementById("departure").value;
    const travellers = document.getElementById("travellers").value;

    if (!from || !to || !departure) {
        alert("Please fill out all required fields!");
        return;
    }

    alert(`Searching flights from ${from} to ${to} on ${departure} for ${travellers}`);
});
