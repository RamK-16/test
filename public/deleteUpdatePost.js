const allPosts = document.querySelector('.indexForm');
const updateForm = document.querySelector('#upForm');

if (allPosts) {
  allPosts.addEventListener('click', async (event) => {
    if (event.target.id === 'del') {
      event.preventDefault();
      const id = event.target.parentNode.dataset.postid;
      const response = await fetch(`/deletePost/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        document.querySelector(`#aa${id}`).remove();
        // window.location.reload();
      }
    }
  });
}

if (updateForm) {
  updateForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = await Object.fromEntries(new FormData(updateForm));
    console.log(formData);
    const response = await fetch('/updatePost/Now', {
      method: 'PUT',
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
