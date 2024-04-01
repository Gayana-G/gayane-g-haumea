const footerTag = document.createElement('footer');
document.body.append(footerTag);

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = "\u00A9 Gayane G&emsp;&emsp;&emsp;" + thisYear;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "VS Code", "GitHub"];
const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');

skills.forEach((el) => {
  let skill = document.createElement('li');
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

  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
    `;

  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.type = 'button';

  removeButton.addEventListener("click", function () {
    // Find the button's parent element using DOM Traversal
    const entry = removeButton.parentNode;
    // Remove the entry element from the DOM
    entry.remove();
  });

  newMessage.appendChild(removeButton);

  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.type = 'button';

  editButton.addEventListener('click', function(){
    const currentMsg = newMessage.querySelector('span').innerText;
    const newMsgTxt = prompt('Enter your new message', currentMsg);

    if(newMsgTxt !== null){
        newMessage.querySelector('span').innerText = newMsgTxt;
    }
  });

  newMessage.appendChild(editButton);

  messageList.appendChild(newMessage);

  if(messageList.children.length === 0){
    messageSection.style.display = 'none';
  } else {
    messageSection.style.display = 'block';
  }


});
