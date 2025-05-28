import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";


export default async function POST(request) {
    
    try {

        const body = await request.json();
        const { name, author, status } = body;

        if (!name || !author || !status) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const newBook = await prisma.book.create({
            data: {name, author, status}
        });

        return NextResponse.json(newBook, { status: 201 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Server error' }, {status: 500});
    }

}