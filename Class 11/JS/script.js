// user store in local storage in the form of array

const handleCreate = () => {
  let user = document.getElementById("userName").value; // string form mai value a gai
  let users = localStorage.getItem("users") || []; // creates array if 1st is null
  if (users == null) {
    users.push(user);
  }

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));
  console.log("user added successfully", typeof users);
};

const handleRead = () => {
  return localStorage.getItem("users");
};

const handleDelete = () => {
  localStorage.removeItem("users");
};
