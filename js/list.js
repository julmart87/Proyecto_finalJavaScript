//* API JSONPlaceholder 
const apiUrl = 'https://jsonplaceholder.typicode.com/users';


const userList = document.getElementById('user-list');

// Solicitud GET a la API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(users => {
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.id}: ${user.name} (${user.email})`;
      userList.appendChild(li); 
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
