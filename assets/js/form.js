let nameInput = document.querySelector("#name");
let titleInput = document.querySelector("#title");
let contentInput = document.querySelector("#content");
let submit = document.querySelector("#submit");
let reset = document.querySelector("#reset");

submit.addEventListener("click", function () {
  event.preventDefault();

  if (nameInput.value == "") {
    alert("Complete the form!");
    nameInput.setAttribute("style", "border-color:red");
  } else if (titleInput.value == "") {
    alert("Complete the form!");
    titleInput.setAttribute("style", "border-color:red");
  } else if (contentInput.value == "") {
    alert("Complete the form!");
    contentInput.setAttribute("style", "border-color:red");
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

    window.location = "./blog.html";
  }
});

// To clear the localStorage
reset.addEventListener("click", () => {
  event.preventDefault();
  localStorage.clear();
});
