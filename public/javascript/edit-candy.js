async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="candy-title"]').value.trim();
    const price = document.querySelector('textarea[name="price"]').value;
    const quantity = document.querySelector('textarea[name="quantity"]').value;

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch(`/api/candies/${id}`, {
        method: 'PUT',
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
    };
};
  
  document.querySelector('.edit-candy-form').addEventListener('submit', editFormHandler);