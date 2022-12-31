function submitData(name, email) {
  const formData = ({
    name: name,
    email: email,
  });
  console.log(formData)
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
      document.body.innerHTML = object.id
    })
    .catch(function (error) {
      console.log(error);
      document.body.innerHTML = error.message
    })
}

