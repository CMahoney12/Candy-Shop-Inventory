async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#psw').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        document.location.replace('/');
        console.log('success');
      } else {
        alert(response.statusText);
      }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);