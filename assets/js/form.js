let nameInput = document.querySelector("#name");
let titleInput = document.querySelector("#title");
let contentInput = document.querySelector("#content");
let submit = document.querySelector("#submit");
let reset = document.querySelector("#reset");

submit.addEventListener("click", function () {
  event.preventDefault();

  if (nameInput.value == "") {
    alert("Enter the name!");
  } else if (titleInput.value == "") {
    alert("Enter the title of the blog!");
  } else if (contentInput.value == "") {
    alert("Enter you thoughts/experiences for the day");
  } else {
    // checking if there is any data with key "users"
    let users;
    if (!localStorage.users) {
      users = [];
    } else {
      users = JSON.parse(localStorage.users);
    }

    // creating an object to access the data from user's input for the blog
    var currentUser = {
      userNumber: users.length,
      name: nameInput.value,
      title: titleInput.value,
      content: contentInput.value,
    };

    users.push(currentUser);

    // saving data to usesr's array ad It only accepts the string values
    localStorage.users = JSON.stringify(users);
    console.log("The data was saved.");
  }
});

// To clear the localStorage
reset.addEventListener("click", () => {
  event.preventDefault();
  localStorage.clear();
});
