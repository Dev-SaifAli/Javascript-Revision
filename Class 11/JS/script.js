// const users = [];
const handleCreate = () => {
  let user = document.getElementById("userName").value;
  const users = localStorage.getItem("users") || [];

//   users.push(user);
  localStorage.setItem("users", users);
  console.log("user is added successfully!🎉");
};

const handleRead = () => {
  let users = localStorage.getItem("users");
  console.log(users, typeof users);

  //   console.log("users :>> ", users);
};

const handleUpdate = () => {
  localStorage.setItem("users");
};

const handleDelete = () => {
  localStorage.removeItem("users");
};
