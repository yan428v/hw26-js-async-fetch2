const base_url = 'https://webaccounting.herokuapp.com'
const button = document.getElementById("register");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const user = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        login: document.getElementById('login').value,
        password: document.getElementById('password').value
    }
    fetch(`${base_url}/account/user`,
        {
            method: 'POST',
            body: JSON.stringify(user),
            // body: user,
            headers: {
                "Content-type": 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
})
