function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
// Wait for the DOM to load before executing code
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("item-form");
  const input = document.getElementById("create_item");
  const log = document.getElementById("log");

  // Event listener for form submission
  form.addEventListener("submit", submitForm);

  async function submitForm(event) {
      event.preventDefault(); // Prevents the default form submission behavior

      const item = input.value; // Get the value from the input field
      console.log(`Item created: ${item}`);

      // Simulate an asynchronous action (like fetching data)
      try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ title: item })
          });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          const data = await response.json(); // Parse the JSON response
          log.textContent = `Item Submitted! ID: ${data.id}`;
      } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
          log.textContent = 'Failed to submit item.';
      } finally {
          input.value = ''; // Clear the input field after submission
      }
  }
});
