const base_url = 'https://webaccounting.herokuapp.com'
const button = document.getElementById("register");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.getElementById("login").value;
    console.log(username)
    const password = document.getElementById("password").value;
    console.log(password)
    const encodedCredentials = btoa(`${username}:${password}`);
    const authorizationHeader = `Basic ${encodedCredentials}`;
    const newFullName = {
        firstName: document.getElementById("newName").value,
        lastName : document.getElementById("newLastName").value
    }
    fetch(`${base_url}/account/user/`, {
        method: 'PUT',
        body: JSON.stringify(newFullName),
        headers: {
            "Content-type": 'application/json',
            'Authorization': authorizationHeader
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
})
