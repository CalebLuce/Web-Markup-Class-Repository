// JavaScript code for form validation
document.getElementById('myForm').addEventListener('submit', function(event) {

  // Prevent form from submitting
  event.preventDefault();

  // Retrieve the input field value
  let inputFieldValue = document.getElementById('inputField').value.trim();

  // Regular expression pattern for alphanumeric input
  let alphaNum = /^[a-zA-Z0-9]+$/;

  // Check if the input value matches the pattern
  if (alphaNum.test(inputFieldValue)) {

    // Valid input: display confirmation and submit the form
    alert('Form Submission Successful!');

  } else {

    // Invalid input: display error message
    alert('Error: Input should be Alphanumeric');

  }
  
})
