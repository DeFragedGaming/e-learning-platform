document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('https://your-backend-url/api/users'); // Replace with your backend URL
    const users = await response.json();
    
    const userList = document.getElementById('user-list');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.id}: ${user.name} (${user.email})`;
      userList.appendChild(li);
    });
  } catch (err) {
    console.error('Error fetching users: ', err);
  }
});