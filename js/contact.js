document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("customForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload

      let formData = new FormData(this);
      let formURL =
        "https://docs.google.com/forms/d/e/1FAIpQLSeR5mDJhM9z80XkKYu62HQqVDYhH7p8xq-sp6SQjkG8Bkk44A/formResponse";

      fetch(formURL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Prevent CORS error
      })
        .then(() => {
          document.getElementById("responseMessage").innerText =
            "Message sent successfully!";

          // ✅ Clear the form after submission
          document.getElementById("customForm").reset();
        })
        .catch((error) => console.error("Error:", error));
    });
});
