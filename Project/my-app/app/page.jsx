import prisma from "@/repo/prisma";
import Link from "next/link";
import { createBook } from "@/actions/actions";

const completedCount = await prisma.book.count({

    where: { 
      status: 'Completed' 
    }

});


  
const readingCount = await prisma.book.count({
   
    where: { 
      status: 'Reading' 
    }
});



const toBeReadCount = await prisma.book.count({

    where: { 
      status: 'Wishlist' 
    }

});


export default async function BooksPages() {

    const books = await prisma.book.findMany();


    return (
      <>
      
        <h1 className='text-center text-4xl font-bold p-5'>📚 Book Tracker</h1>

        <p className="text-center text-lg max-w-xl mx-auto p-3 leading-relaxed">Welcome to Book Tracker — your personal library where you can Add books, track your reading, and organize your literary journey.</p>


        <div id = "form" className='flex justify-center mb-8'>
          
          <form action = {createBook} className='flex bg-gray-700 flex-col gap-2 w-50 p-6 rounded-xl w-full max-w-md space-y-4'>
            <h2 className="text-center font-semibold text-white">Add a New Book</h2>
              <input type="text" name="name" className="rounded w-full p-1.5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" required placeholder='Book Title' />
              <input type="text" name="author" className="w-full p-1.5 rounded text-black  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" required placeholder='Author' />
              <input type="text" name="description" className="w-full p-1.5 rounded text-black  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder='Description (optional)' />
              <select name="status" required placeholder='Choose status' className='w-full p-3 rounded text-black focus:outline-none focus:ring-2 focus:ring-indigo-500' >
                  <option value=''>Choose book status</option>
                  <option value='Reading'>Reading</option>
                  <option value='Completed'>Completed</option>
                  <option value='Wishlist'>Want to Read</option>
              </select>
              <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded">Add</button>
          </form>

        
        </div>

            <hr />
            <hr />
            <hr className='p-4' />





            <div className="flex flex-col justify-center ">

    

                <div id='reading' className='flex flex-col'>

                  <div className="flex flex-col justify-center items-center ">

                      <p className='text-3xl text-center gap-3'>📖 Currently Reading</p>
                      <p className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">You’re in the middle of {readingCount} books.</p>

                  </div>

                    
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
                              <Link href = {`/books/${book.id}`}><button className='border rounded p-1 bg-purple-600'>Manage & More Info</button></Link>
                        </div>
                      </div>
                    ))}

                  </div>

                </div>

                <div id='read' className='flex flex-col'>

                  <div className="flex flex-col justify-center items-center ">

                      <p className='text-3xl text-center'>✅ Read</p>
                      <p className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">You have completed {completedCount} books.</p>

                </div>

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
                              <button className='border rounded p-1 bg-purple-600'>Manage & More Info</button>
                            </div>
                        </div>
                        
                      ))}
                    </div>

                </div>

                <div id='want to read'>

                  <div className="flex flex-col justify-center items-center ">

                      <p className='text-3xl text-center'>🕒 Want to Read</p>
                      <p className="bg-yellow-600 text-white text-xs px-2 py-1 rounded-full">{toBeReadCount} books are waiting to be explored.</p>
                </div>

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
                              <button className='border rounded p-1 bg-purple-600'>Manage & More Info</button>
                            </div>
                          </div>
                        ))}
                      </div>

                </div>



          </div>

      </>
    );

};