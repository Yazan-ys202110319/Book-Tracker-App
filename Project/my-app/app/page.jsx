import { getAllBooks } from '../ui/Card.js';

export default async function Home() {

  const books = await getAllBooks();

  return (
    <>
    
    

      <h1>Book Tracker</h1>

      <div id = "form">
        
        <form>

        </form>

      </div>

      <div id='reading'>

      </div>

      <div id='read'>
        
      </div>

      <div id='want to read'>
        
      </div>

      <div className='grid grid-cols-4 md:grid-cols-2 gap-4'>
        {books.map(book => (
          <div key={book.id} className='border-2'>
            <p>name: {book.name}</p>
            <p>author: {book.author}</p>
            <p>status: {book.status}</p>
          </div>
        ))}
      </div>



    </>
  );
}
