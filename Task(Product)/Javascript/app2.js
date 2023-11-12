

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signInForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        fetch('http://localhost:3000/posts')
            .then(response => {
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // JSON formatında cavabı çıxar
                return response.json();
            })
            .then(data => {
                // Cavabı konsola yazdır
                // console.log('Data:', data);

                // Username və passwordu axtar

                var isLoginSuccessful = false;
                data.forEach(item => {
                    if (item.username === username && item.password === password) {
                        isLoginSuccessful = true;
                    }

                });

                if (isLoginSuccessful) {
                    console.log("Uğurla giriş edildi");
                } else {
                    console.log("Kod və ya istifadəçi adi yanlişdir");
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    })
})