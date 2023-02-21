const submit = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: formData.username,
      email: formData.email,
      name: `${formData.fname} ${formData.lname}`
    })
  };
  const url = "https://jsonplaceholder.typicode.com/users";
  let rest = await fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => returnPromise(data))
    .catch((e) => console.log(e));
  return rest;
};

const returnPromise = (data) => {
  let user = {};
  user.id = data.id;
  user.name = data.name;
  user.username = data.username;
  return user;
};
export default submit;
