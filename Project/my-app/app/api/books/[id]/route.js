import prisma from "@/repo/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
    const { id } = params;
    const data = await request.json();
    
    try {
        const updatedBook = await prisma.book.update({
            where: { id },
            data
        });
        
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
        
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting book:", error);
        return NextResponse.json(
            { error: "Failed to delete book" },
            { status: 500 }
        );
    }
}