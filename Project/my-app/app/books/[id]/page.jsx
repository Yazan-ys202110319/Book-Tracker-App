import Link from "next/link.js";
import prisma from "../../../repo/prisma.js";



export default async function BookPage({ params }) {

    const book = await prisma.book.findUnique({
        where: {
            id: params.id
        },
    });


    return (
      <>
    
          <header>

            <Link href = '/'><button className="bg-white text-black p-1 rounded">Go Back</button></Link>
            
        </header>

        <body>
            
              <p>Book Name: {book.name}</p>
              <p>Book Author: {book.author}</p>
              <p></p>

        </body>

      </>
    );

};