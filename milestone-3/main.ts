// Importing form and resume output div in typescript ->

const form = document.getElementById("form-resume") as HTMLFormElement;
const resumeOutput = document.getElementById("resume-output") as HTMLDivElement;

// Handling Form Submission ->

form.addEventListener("submit",(event:Event) => {
    event.preventDefault() 

// Accessing and storing imput values in variables ->

const name = (document.getElementById("name") as HTMLInputElement).value
const email = (document.getElementById("email") as HTMLInputElement).value
const phone = (document.getElementById("phone") as HTMLInputElement).value
const address = (document.getElementById("address") as HTMLInputElement).value
const school = (document.getElementById("school") as HTMLInputElement).value
const college = (document.getElementById("college") as HTMLInputElement).value
const university = (document.getElementById("university") as HTMLInputElement).value
const diploma = (document.getElementById("diploma") as HTMLInputElement).value
const other = (document.getElementById("other") as HTMLInputElement).value
const experience = (document.getElementById("experience") as HTMLInputElement).value
const skills = (document.getElementById("skills") as HTMLInputElement).value

// Generating resume structure ->


// "Other" field will not be included (only if it's empty):
let otherField = "";
if (other.trim() !== "") {
  otherField = `<p><b>Other:</b><span contenteditable="true">${other}</span></p>`;
}
// For Diploma :
let diplomaField = "";
if (other.trim() !== "") {
  diplomaField = `<p><b>Diploma:</b><span contenteditable="true">${diploma}</span></p>`;
}

// Generating resume structure ->


const resumeHtml = `
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b> <span contenteditable="true">${name}</span></p>
<p><b>Email:</b> <span contenteditable="true">${email}</span></p>
<p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
<p><b>Address:</b> <span contenteditable="true">${address}</span></p>

<h3>Education</h3>
<p><b>School:</b> <span contenteditable="true">${school}</span></p>
<p><b>College:</b> <span contenteditable="true">${college}</span></p>
<p><b>University:</b> <span contenteditable="true">${university}</span></p>

${diplomaField} <!-- Diploma field is Conditional-->

${otherField}  <!-- Other field is Conditional-->

<h3>Experience</h3>
<ul>
${experience.split(",").map(experience => `<li>${experience.trim()}</li>`).join(``)};
</ul>

<h3>Skills</h3>
<ul>
${skills.split(",").map(skill => `<li>${skill.trim()}</li>`).join(``)};
<ul/>
`

// Output of Generated Resume ->

if(resumeOutput){
    resumeOutput.innerHTML = resumeHtml
}else {
    console.error("Element is Missing")
}
})

