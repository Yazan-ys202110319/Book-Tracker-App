import prisma from "@/repo/prisma";
import { NextResponse } from "next/server";
import { revalidatePath } from 'next/cache';

export async function PATCH(request, { params }) {
    const { id } = params;
    const data = await request.json();
    
    try {
        const updatedBook = await prisma.book.update({
            where: { id },
            data
        });
        
        revalidatePath('/');
        revalidatePath(`/books/${id}`);
        
        return NextResponse.json(updatedBook);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update book" }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        await prisma.book.delete({
            where: { id: params.id }
        });
        
        revalidatePath('/', 'layout');
        revalidatePath('/', 'page');   // Revalidate at the page level
        
        return new NextResponse(
            JSON.stringify({ success: true }),
            { 
                status: 200, 
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store, max-age=0, must-revalidate'
                } 
            }
        );
    } catch (error) {
        console.error("Error deleting book:", error);
        return NextResponse.json(
            { error: "Failed to delete book" },
            { status: 500 }
        );
    }
}