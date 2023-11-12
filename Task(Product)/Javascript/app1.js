

function checkEmail() {
    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('error-message');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.innerHTML = "Invalid email address. Please enter a valid email.";
        return false;
    } else {
        errorMessage.innerHTML = "";
        return true;
    }
}

document.getElementById('form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = this.elements.username.value;
    const email = this.elements.email.value;
    const password = this.elements.password.value;


    const user = {
        username,
        email,
        password
    };

    try {

        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });


        if (response.status === 201) {
            console.log('Istifadeci ugurla qeydiyyatdan kecdi:', user);
            window.location.href = "signIn.html"
        } else {
            console.error('Istifadeci qeydiyyatdan kece bilmedi. Error kodu:', response.status);
        }


    } catch (error) {
        console.error('Istifadeci daxil edilerken xeta yarandi:', error);
    }
});



