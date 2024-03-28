// blog.html
let container = document.querySelector(".container");
console.log(container);
// printing values
const printVal = () => {
  let storedData = localStorage.getItem("users");
  console.log(storedData);

  if (storedData) {
    let usersArray = JSON.parse(storedData);

    usersArray.forEach((user) => {
      // checking the data accessible
      console.log(user);
      console.log(user.title);
      console.log(user.content);
      console.log(user.name);

      // creating elements
      let div = document.createElement("div");
      div.setAttribute("class", "blog");

      let figure = document.createElement("figure");
      figure.setAttribute("class", "blog-content");

      let section = document.createElement("section");
      section.setAttribute("class", "blog-title");

      let article = document.createElement("article");
      let p = document.createElement("p");
      p.setAttribute("class", "blog-info");

      let section1 = document.createElement("section");
      section1.setAttribute("class", "blog-footer");

      // inseting the data to the elements
      section.textContent = user.title;

      p.textContent = user.content;

      section1.textContent = `Posted by : ${user.name}`;

      // adding elements to the parent element
      figure.append(section);
      article.append(p);
      figure.append(article);
      figure.append(section1);
      div.append(figure);

      // adding the blog to the main container div
      container.append(div);
    });
  }
};

printVal();
