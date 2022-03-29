async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="candy-title"]').value;
    const price = document.querySelector('textarea[name="price"]').value;
    const quantity = document.querySelector('textarea[name="quantity"]').value;

  
    const response = await fetch(`/api/candies`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        price
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);