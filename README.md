# gayane-g-haumea

portfolio project for Intro to Programming course with Code the Dream
Gayane Galustyan

# requirements

## General
 - [x] Project is published on a public GitHub repository
 - [x]  Code executes without errors in the browser
## Project Structure
 - [x]  README.md (NOTE: this file is typically used to explain how someone can run your code, but it does not need to contain this content for your final project to be acceptable)
 - [x]  index.html
 - [x]  css folder
     - [x]  index.css
 - [x]  js folder
     - [x]  index.js
 - [x]  (OPTIONAL) images folder

## index.html
 - [x]  include proper boilerplate code
 - [x]  (OPTIONAL) use a font-family or Google fonts
 - [x] index.css and index.js file should be properly linked to this file
 - [x]  level 1 heading with student's name
 - [ ]  navigation with working internal links to the following sections:
    - [x]  About
    - [x]  Experience
    - [x] Skills
    - [x] Projects
    - [x] Leave a Message
     - [x]  (OPTIONAL) Connect or Contact Me section to contain email and social media links
 - [x]  (OPTIONAL) sticky/fixed navigation that stays in place when user scrolls down on the page
 - [ ]  (OPTIONAL) dark mode toggle switch to change coloring of background and text between default and dark mode
 - [ ]  (OPTIONAL) navigation converted to a hamburger menu on smaller devices via media queries
### About Section
 - [x]  level 2 heading
 - [x]  one or more paragraphs of text
 - [x]  (OPTIONAL) your photo with alt attribute for accessibility
### Experience Section
 - [x]  level 2 heading
 - [x]  list of previous work or experience or one or paragraphs of related experiences if student has no previous work experience
 - [x]  if listing experience, this should be styled in grid or flexbox layout
### Skills Section
 - [x]  level 2 heading
 - [x]  list of skills, inserted using JavaScript from the index.js file
 - [ ]  list should be styled in a grid or flexbox layout
### Projects Section
 - [x]  level 2 heading
 - [x]  list of GitHub repositories, fetched using the GitHub API and inserted using JavaScript from the index.js file
 - [x]  (OPTIONAL) each GitHub repository name is a clickable link that takes the user to that repository
 - [x]  (OPTIONAL) display additional information about each of the repositories (examples: created date, description, etc.)
 - [x]  (OPTIONAL) customize the styling of your projects list (cards or use of flexbox or grid for examples)
### Leave a Message Section (Form and Messages List)
 - [x]  level 2 heading for form
     - [x]  Name, Email Address, and Message fields
     - [x]  Submit button
     - [x]  event listener that adds the form field inputs to the messages section
 - [x]  level 2 heading for messages
     - [x]  list of messages (once the form has been given inputs and submit button clicked) styled in a grid of flexbox layout
         - [ ]  Each message item should have the following:
             - [x]  Name of message author as a clickable link to email the author at the email address they provided in the form
             - [x]  Message text
             - [x]  Remove button to delete the message from the list of messages
             - [ ]  (OPTIONAL) Edit button for user to change one (or more) of the form inputs (name, email, message)
         - [x]  (OPTIONAL) conditionally render (meaning hide/display) the level 2 heading and section content depending on whether or not there are messages
### (OPTIONAL) Connect or Contact Me
NOTE: If you do not have a Connect or Contact Me section, your links should be in the footer of your page as icons/images

 - [x]  clickable link to email the student
 - [x]  at least two social media links to the student's profile pages (examples: GitHub, LinkedIn, twitter, instagram, etc.)
 - [x]  (OPTIONAL) use icons or images in place of text string links for your email and 2+ social media links
### Footer
 - [x]  Copyright logo, current year, and student's name inserted using JavaScript from the index.js file
 - [ ]  Email and 2+ social media icon/image links (if the page does NOT have a Connect or Contact Me section)

## index.js
 - [x]  Comments in code as appropriate (to notate what sections of code are used for)
 - [x]  Sections of code to accomplish the following:
     - [x]  Insert the copyright logo, current year, and student's name in the footer of index.html
     - [x]  Using an array, insert the array items as a list of skills in the skills section of index.html
     - [x]  Handle the event listener on the message form to insert the following into the messages section:
         - [x]  convert form inputs into the author's name as a clickable link
         - [x]  display their message and
         - [x]  provide a remove button to delete the message
         - [x]  (OPTIONAL) provide an edit button to change one or more form fields
         - [x]  (OPTIONAL) conditionally render the messages header and section of index.html (show it if there are messages, hide it if none)
     - [x]  Using API fetch, insert the names of your GitHub repositories in the projects section of index.html
         - [x]  (OPTIONAL) provide additional information about each repository
         - [x]  (OPTIONAL) make the repository names clickable links that redirect the user to that repository page

## index.css
 - [x]  (Optional) Comments in code as appropriate (to notate what sections of code are for)
 - [x]  At least two media queries
     - [x]  In each media query there should be at least 2 property changes to at least 3 html elements
 - [x]  Flexbox (or Grid) used to format the layout of the Experience and Connect sections (NOTE: If you are using social media icons in your footer in place of a Connect section, you should use Flexbox or Grid to format the layout of your icons in the footer)

## (OPTIONAL) images folder
 - [x]  If you've elected to use images in your portfolio, be sure to have an images folder at the root level of your repository (same level as your index.html and README.md files). All your images should go in this folder
 - [x]  Make sure images used in your html or css files are properly linked to the image inside your images folder
 - [x]  Remember to use alt for any images so there will be helper text if the image is not displayed properly

## Styling
Everyone's style is different and we encourage students to let the style fo their site represent them.  That being said, there are some general style guidelines we encourage you to follow:

 - [x]  Remember to have appropriate contrast to your site (don't use a dark font on a dark background)
 - [x]  You should not need to horizontally scroll to see your site content on any device (mobile, tablet, or desktop)
 - [x]  Watch out for font sizes on smaller devices. The screen is smaller, but the font size should not be small also. This is also true for form input fields/buttons, a user would need to tap on it with a finger to get focus on the input to type, don't make it too small that their device can't recognize what they're trying to tap on.
