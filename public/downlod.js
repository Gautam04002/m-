document.getElementById('rationCardForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById('name').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const dob = document.getElementById('dob').value;
    const mobile = document.getElementById('mobile').value;

    // Simulate file download
    if (name && cardNumber && dob && mobile) {
        document.getElementById('message').textContent = "Download initiated!";
        
        // Simulate download
        setTimeout(() => {
            alert(`Ration Card Downloaded for ${name}`);
        }, 1000);
    } else {
        document.getElementById('message').textContent = "Please fill all fields!";
        document.getElementById('message').style.color = "red";
    }
});
