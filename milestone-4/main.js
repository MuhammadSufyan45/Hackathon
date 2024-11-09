// Importing form and resume output div in typescript ->
var form = document.getElementById("form-resume");
var resumeOutput = document.getElementById("resume-output");
// Handling Form Submission ->
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Accessing and storing imput values in variables ->
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var school = document.getElementById("school").value;
    var college = document.getElementById("college").value;
    var university = document.getElementById("university").value;
    var diploma = document.getElementById("diploma").value;
    var other = document.getElementById("other").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // "Other" field will not be included (only if it's empty):
    var otherField = "";
    if (other.trim() !== "") {
        otherField = "<p><b>Other:</b><span contenteditable=\"true\">".concat(other, "</span></p>");
    }
    // For Diploma :
    var diplomaField = "";
    if (other.trim() !== "") {
        diplomaField = "<p><b>Diploma:</b><span contenteditable=\"true\">".concat(diploma, "</span></p>");
    }
    // Generating resume structure ->
    var resumeHtml = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n<p><b>Address:</b> <span contenteditable=\"true\">").concat(address, "</span></p>\n\n<h3>Education</h3>\n<p><b>School:</b> <span contenteditable=\"true\">").concat(school, "</span></p>\n<p><b>College:</b> <span contenteditable=\"true\">").concat(college, "</span></p>\n<p><b>University:</b> <span contenteditable=\"true\">").concat(university, "</span></p>\n\n").concat(diplomaField, " <!-- Diploma field is Conditional-->\n\n").concat(otherField, "  <!-- Other field is Conditional-->\n\n<h3>Experience</h3>\n<ul>\n").concat(experience.split(",").map(function (experience) { return "<li>".concat(experience.trim(), "</li>"); }).join(""), ";\n</ul>\n\n<h3>Skills</h3>\n<ul>\n").concat(skills.split(",").map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(""), ";\n<ul/>\n");
    // Output of Generated Resume ->
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeHtml;
    }
    else {
        console.error("Element is Missing");
    }
});
