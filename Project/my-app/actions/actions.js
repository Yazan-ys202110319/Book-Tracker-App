'use server';

import prisma from "@/repo/prisma";

export async function createBook(formData) {
    
    await prisma.book.create({
        data: {
            name: formData.get('name'),
            author: formData.get('author'),
            status: formData.get('status')
        }
    });

}