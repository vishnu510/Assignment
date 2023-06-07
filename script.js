// Sample book data
const books = [
    {
      cover: 'book1.jpg',
      title: 'Book Title 1',
      author: 'Author 1',
      genre: 'Genre 1',
      pages: 150
    },
    {
      cover: 'book2.jpg',
      title: 'Book Title 2',
      author: 'Author 2',
      genre: 'Genre 2',
      pages: 250
    },
    // Add more book objects as needed
  ];
  
  let currentBookIndex = 0;
  
  // Function to update the book details based on the current book index
  function updateBookDetails() {
    const book = books[currentBookIndex];
    document.querySelector('.book img').src = book.cover;
    document.querySelector('.title').textContent = book.title;
    document.querySelector('.author').textContent = `Author: ${book.author}`;
    document.querySelector('.genre').textContent = `Genre: ${book.genre}`;
    document.querySelector('.pages').textContent = `Pages: ${book.pages}`;
  }
  
  // Function to handle next button click
  function onNextClick() {
    currentBookIndex++;
    if (currentBookIndex >= books.length) {
      currentBookIndex = 0;
    }
    updateBookDetails();
  }
  
  // Function to handle previous button click
  function onPreviousClick() {
    currentBookIndex--;
    if (currentBookIndex < 0) {
      currentBookIndex = books.length - 1;
    }
    updateBookDetails();
  }
  
  // Attach event listeners to the buttons
  document.getElementById('previous-btn').addEventListener('click', onPreviousClick);
  document.getElementById('next-btn').addEventListener('click', onNextClick);
  
  // Initial book details update
  updateBookDetails();
  