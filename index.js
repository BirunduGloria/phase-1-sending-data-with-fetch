// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => {
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = data.id;
      body.appendChild(p);
    })
    .catch(error => {
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = error.message;
      body.appendChild(p);
    });
}
