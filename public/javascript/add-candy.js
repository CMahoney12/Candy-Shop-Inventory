async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="candy-title"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const quantity = document.querySelector('input[name="quantity"]').value;

  
    const response = await fetch(`/api/candies`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        price,
        quantity
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
  
  document.querySelector('.new-candy-form').addEventListener('submit', newFormHandler);