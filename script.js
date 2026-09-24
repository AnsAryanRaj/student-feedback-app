const form = document.getElementById("feedbackForm");

const submittedFeedback =
    document.getElementById("submittedFeedback");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const course =
        document.getElementById("course").value.trim();

    const feedback =
        document.getElementById("feedback").value.trim();


    // NIET email validation
    const emailPattern =
        /^[A-Za-z0-9._%+-]+@niet\.co\.in$/;


    if (!emailPattern.test(email)) {

        alert(
            "Please enter a valid NIET email.\n\nExample: student@niet.co.in"
        );

        return;
    }


    // Display submitted feedback

    submittedFeedback.innerHTML = `
        <h2>✓ Feedback Submitted</h2>

        <p>
            <strong>Name:</strong> ${name}
        </p>

        <p>
            <strong>Email:</strong> ${email}
        </p>

        <p>
            <strong>Course:</strong> ${course}
        </p>

        <p>
            <strong>Feedback:</strong> ${feedback}
        </p>
    `;


    submittedFeedback.style.display = "block";


    // Clear form

    form.reset();

});