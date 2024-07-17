const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey, I'm Red!";

const headingThree = document.createElement("h3");
headingThree.classList.add("heading-three");
headingThree.textContent = "I'm a blue h3!";

container.appendChild(paragraph);
container.appendChild(headingThree);

const content = document.createElement("div");
content.classList.add("content")

const headingOne = document.createElement("h1");
headingOne.classList.add("heading-one");
headingOne.textContent = "I'm inside a div";

const paragraphTwo = document.createElement("p");
paragraphTwo.classList.add("paragraph-two");
paragraphTwo.textContent = "ME TOO!";

content.appendChild(headingOne);
content.appendChild(paragraphTwo);
container.appendChild(content);

