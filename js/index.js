const footerTag = document.createElement("footer");
document.body.append(footerTag);

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = "\u00A9 Gayane G&emsp;&emsp;&emsp;" + thisYear;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "VS Code", "GitHub"];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");

skills.forEach((el) => {
  let skill = document.createElement("li");
  skill.innerText = el;
  skillsList.appendChild(skill);
});

const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener("submit", function (event) {
  // Prevent default refreshing behavior of the submit event
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log("Name:", usersName);
  console.log("Email:", usersEmail);
  console.log("Message:", usersMessage);

  messageForm.reset();

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
    `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.classList.add("remove-button")

  removeButton.addEventListener("click", function () {
    // Find the button's parent element using DOM Traversal
    const entry = removeButton.parentNode;
    // Remove the entry element from the DOM
    entry.remove();
    // Toggle the display of the messages section
    toggleMessagesSection();
  });

  newMessage.appendChild(removeButton);

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.type = "button";
  editButton.classList.add("edit-button")

  editButton.addEventListener("click", function () {
    const currentMsg = newMessage.querySelector("span").innerText;
    const newMsgTxt = prompt("Enter your new message", currentMsg);

    if (newMsgTxt !== null) {
      newMessage.querySelector("span").innerText = newMsgTxt;
    }
  });

  newMessage.appendChild(editButton);

  messageList.appendChild(newMessage);

  // Toggle the display of the messages section
  toggleMessagesSection();
});

// Function to remove a message
function removeMessage(entry) {
  // Remove the entry element from the DOM
  entry.remove();

  // Toggle the display of the messages section
  toggleMessagesSection();
}

// Function to toggle the display of the messages section
function toggleMessagesSection() {
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");

  // Check if there are any messages
  if (messageList.children.length === 0) {
    messageSection.style.display = "none"; // Hide the messages section
  } else {
    messageSection.style.display = "block"; // Display the messages section
  }
}

// Initial toggle of the messages section
toggleMessagesSection();

const username = "Gayana-G";
// Creating a fetch
fetch(`https://api.github.com/users/${username}/repos`)
  .then((response) => {
    if (response.ok) {
      return response.json(); // Parse response as JSON
    } else {
      throw new Error("Failed to fetch repositories");
    }
  })
  .then((repositories) => {
    const projectList = document.getElementById("Projects");

    repositories.forEach((repo) => {
      // Create a new list item element
      const projectItem = document.createElement("li");
      projectItem.classList.add("project-item"); // Add project-item class

      // Create a new anchor element for the project name
      const projectName = document.createElement("a");
      projectName.href = repo.html_url;
      projectName.textContent = repo.name;
      projectName.classList.add("project-name"); // Add project-name class

      // Create a paragraph element for the project description
      const projectDescription = document.createElement("p");
      projectDescription.textContent = repo.description;
      projectDescription.classList.add("project-description"); // Add project-description class

      // Append project name and description to project item
      projectItem.appendChild(projectName);
      projectItem.appendChild(projectDescription);

      // Append project item to project list
      projectList.appendChild(projectItem);
    });
  })
  .catch((error) => {
    if (error instanceof SyntaxError) {
      console.error("Empty response from server");
    } else {
      console.error("Error fetching data: ", error.message);
    }
  });
