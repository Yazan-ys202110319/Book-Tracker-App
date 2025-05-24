import { getAllBooks } from '../ui/Card.js';

export default async function Home() {

  const books = await getAllBooks();

  return (
    <>
      <div>
        {books.map((book) => (
          <li key={book.id}>
              {book.name},,,,
              {book.author}
          </li>
        ))}
      </div>
    </>
  );
}
