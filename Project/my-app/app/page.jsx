'use client';

import { useState, useEffect } from "react";



export default function Page() {

  const [form, setForm] = useState({name: '', author: '', status: 'Reading'});
  const [books, setBooks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault()

    fetchBooks();

  }

  const fetchBooks = async () => {
    const res = await fetch('/api/route');
    const data = await res.json();
    setBooks(data);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
    
      <h1 className='text-center text-4xl font-bold'>Book Tracker</h1>

      <div id = "form" className='flex justify-center'>
        
        <form className='flex flex-col gap-2 w-50 p-3' onSubmit={handleSubmit}>
            <input required placeholder='Book Title' value={form.name} onChange={(e) => setForm({...form, name:e.target.value })} />
            <input required placeholder='Author' value={form.author} onChange={(e) => setForm({...form, author: e.target.value })} />
            <select required placeholder='Choose status' className='text-black' value={form.status} onChange={(e) => setForm({...form, status: e.target.value })}>
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