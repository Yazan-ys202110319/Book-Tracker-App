import { getAllBooks } from '../ui/Card.js';


export default async function Home() {

  const books = await getAllBooks();

  return (
    <>
    
      <h1 className='text-center text-4xl font-bold'>Book Tracker</h1>

      <div id = "form" className='flex justify-center'>
        
        <form className='flex flex-col gap-2 w-50 p-3'>
            <input required placeholder='Book Title' />
            <input required placeholder='Author' />
            <select required placeholder='Choose status' className='text-black'>
                <option>Reading</option>
                <option>Read</option>
                <option>Want to Read</option>
            </select>
            <button>Add Book</button>
        </form>

      
      </div>

          <hr />
          <hr />
          <hr className='p-4' />




          <div className="flex flex-col justify-center ">

  

              <div id='reading' className='flex flex-col'>

                  <p className='text-3xl  text-center'>📖 Currently Reading</p>

                  <div className='flex flex-wrap justify-center gap-4 p-8'>

                  {books.filter((book) => book.status === 'Reading')
                  .map((book) => (
                    <div key={book.id} className='flex flex-row gap-16 border p-4 rounded'>
                      <div>
                          <h3>{book.name}</h3>
                          <p>by {book.author}</p>
                          <p>Status: {book.status}</p>
                      </div>
                      <div className='flex flex-col justify-center items-center gap-2'>
                            <button className='border rounded p-1 bg-red-600'>Delete</button>
                            <button className='border rounded p-1 bg-blue-600'>Edit</button>
                      </div>
                    </div>
                  ))}

                </div>

              </div>

              <div id='read' className='flex flex-col'>

                    <p className='text-3xl text-center'>✅ Read</p>

                    <div className='flex flex-wrap justify-center gap-4 p-8'>

                    {books.filter((book) => book.status === 'Completed')
                    .map((book) => (
                      <div key={book.id} className='flex flex-row gap-16 border p-4 rounded w-fit'>
                        <div>
                            <h3>{book.name}</h3>
                            <p>by {book.author}</p>
                            <p>Status: {book.status}</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <button className='border rounded p-1 bg-red-600'>Delete</button>
                            <button className='border rounded p-1 bg-blue-600'>Edit</button>
                          </div>
                      </div>
                      
                    ))}
                  </div>

              </div>

              <div id='want to read'>

                    <p className='text-3xl text-center'>🕒 Want to Read</p>

                      <div className='flex flex-wrap justify-center gap-4 p-8'>

                      {books.filter((book) => book.status === 'Wishlist')
                      .map((book) => (
                        <div key={book.id} className='flex flex-row gap-16 border p-4 rounded w-fit'>
                          <div>
                            <h3>{book.name}</h3>
                            <p>by {book.author}</p>
                            <p>Status: {book.status}</p>
                          </div>
                          <div className='flex flex-col justify-center items-center gap-2'>
                            <button className='border rounded p-1 bg-red-600'>Delete</button>
                            <button className='border rounded p-1 bg-blue-600'>Edit</button>
                          </div>
                        </div>
                      ))}
                    </div>

              </div>



        </div>

    </>
  );
}