document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear old errors
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('message-error').textContent = '';
  document.getElementById('success-message').textContent = '';

  // Get values
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  // Track if form is valid
  var valid = true;

  // Check name
  if (name === '') {
    document.getElementById('name-error').textContent = 'Please enter your name.';
    valid = false;
  }

  // Check email
  if (email === '') {
    document.getElementById('email-error').textContent = 'Please enter your email.';
    valid = false;
  } else if (email.indexOf('@') === -1) {
    document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Check message
  if (message === '') {
    document.getElementById('message-error').textContent = 'Please write a message.';
    valid = false;
  } else if (message.length < 10) {
    document.getElementById('message-error').textContent = 'Your message is too short!';
    valid = false;
  }

  // If everything is valid show success
  if (valid) {
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('success-message').textContent = 'Thank you! Your message has been sent.';
  }

});