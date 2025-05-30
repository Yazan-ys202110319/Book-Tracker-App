import prisma from "../../../repo/prisma.js";



export default async function BookPage({ params }) {

    const book = await prisma.book.findUnique({
        where: {
            id: params.id
        },
    });


    return (
      <>
    
            <p>{book.name}</p>
        

      </>
    );

};