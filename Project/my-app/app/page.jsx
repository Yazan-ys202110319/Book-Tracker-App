import { getAllBooks } from '../ui/Card.js';


export default async function Home() {

  const books = await getAllBooks();

  return (
    <>
    
      <h1 className='text-center text-3xl font-bold'>Book Tracker</h1>

      <div id = "form" className='flex justify-center'>
        
        <form className='flex flex-col gap-2 w-50'>
            <input placeholder='Book Title' />
            <input placeholder='Author' />
            <select>
                <option>Reading</option>
                <option>Read</option>
                <option>Want to Read</option>
            </select>
            <button>Add Book</button>
        </form>

      </div>

      <div id='reading'>

      </div>

      <div id='read'>
        
      </div>

      <div id='want to read'>
        
      </div>



      {/* Reading section */}

      <div className='grid grid-cols-4 md:grid-cols-2 gap-4'>

        {books.filter((book) => book.status === 'Reading')
        .map((book) => (
          <div key={book.id} className='border p-4 rounded shadow'>
              <h3>{book.name}</h3>
              <p>by {book.author}</p>
              <p>Status: {book.status}</p>
          </div>
        ))}

      </div>


      <div className='grid grid-cols-4 md:grid-cols-2 gap-4'>

        {books.filter((book) => book.status === 'Completed')
        .map((book) => (
          <div key={book.id} className='border p-4 rounded shadow'>
              <h3>{book.name}</h3>
              <p>by {book.author}</p>
              <p>Status: {book.status}</p>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-4 md:grid-cols-2 gap-4'>

        {books.filter((book) => book.status === 'Wishlist')
        .map((book) => (
          <div key={book.id} className='border p-4 rounded shadow'>
              <h3>{book.name}</h3>
              <p>by {book.author}</p>
              <p>Status: {book.status}</p>
          </div>
        ))}
      </div>

    </>
  );
}