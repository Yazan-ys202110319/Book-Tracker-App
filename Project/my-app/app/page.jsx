import prisma from "@/repo/prisma";
import Link from "next/link";


const completed = await prisma.book.aggregate({
    _count: true,
    where: { 
      status: 'Completed' 
    }
});


  
const reading = await prisma.book.aggregate({
    _count: true,
    where: { 
      status: 'Reading' 
    }
});



const toBeRead = await prisma.book.aggregate({
    _count: true,
    where: { 
      status: 'Wishlist' 
    }
});


export default async function BooksPages() {

    const books = await prisma.book.findMany();


    return (
      <>
      
        <h1 className='text-center text-4xl font-bold'>Book Tracker</h1>

        <p className="text-center">Welcome to Book Tracker — your personal library where you can Add books, track your reading, and organize your literary journey.</p>


        <div id = "form" className='flex justify-center'>
          
          <form className='flex flex-col gap-2 w-50 p-3'>
              <input required placeholder='Book Title' />
              <input required placeholder='Author' />
              <select required placeholder='Choose status' className='text-black' >
                  <option value='Reading'>Reading</option>
                  <option value='Completed'>Read</option>
                  <option value='Wishlist'>Want to Read</option>
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
                    <p>You’re in the middle of {completed._count} books.</p>

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
                              <button className='border rounded p-1 bg-blue-600'>Manage & More Info</button>
                        </div>
                      </div>
                    ))}

                  </div>

                </div>

                <div id='read' className='flex flex-col'>

                      <p className='text-3xl text-center'>✅ Read</p>
                      <p>You can completed {reading._count} books.</p>

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
                              <button className='border rounded p-1 bg-blue-600'>Manage & More Info</button>
                            </div>
                        </div>
                        
                      ))}
                    </div>

                </div>

                <div id='want to read'>

                      <p className='text-3xl text-center'>🕒 Want to Read</p>
                      <p>{toBeRead._count} books are waiting to be explored.</p>

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
                              <button className='border rounded p-1 bg-blue-600'>Manage & More Info</button>
                            </div>
                          </div>
                        ))}
                      </div>

                </div>



          </div>

      </>
    );

};