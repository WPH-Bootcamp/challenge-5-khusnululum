// 1. Type of book
type Book = {
  title: string;
  author: string;
  year: number;
};

// 2. Array untuk menyimpan semua buku
const books: Book[] = [];

// 3. Fungsi addBook
function addBook(title: string, author: string, year: number): void {
  const newBook: Book = { title, author, year };
  books.push(newBook);

  console.log(`Book added: "${title}" by ${author} (${year})`);
}

// 4. Fungsi listBook
function listBooks(): void {
  if (books.length === 0) {
    console.log("No books in the collection");
    return;
  }

  console.log("All Books:");
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

// 5. Fungsi searchBook
function searchBook(title?: string): void {
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }

  const foundBooks = books.filter((book) => book.title.includes(title));

  if (foundBooks.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  console.log(`Search Results for "${title}":`);
  foundBooks.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
