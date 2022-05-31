const addForm = document.querySelector('#addForm');

if (addForm) {
  addForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = await Object.fromEntries(new FormData(addForm));
    console.log(formData);

    const response = await fetch('/addPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      window.location.href = '/';
    }
  });
}
