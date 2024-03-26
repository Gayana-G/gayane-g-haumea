const footerTag = document.createElement('footer');
document.body.append(footerTag);

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent = '\u00A9' + 'Gayane G\t\t' + thisYear;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "VS Code", "GitHub"];
const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');

skills.forEach(el => {
    let skill = document.createElement('li');
    skill.innerText = el;
    skillsList.appendChild(skill);
})