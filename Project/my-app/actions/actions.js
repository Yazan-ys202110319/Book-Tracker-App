'use server';

import prisma from "@/repo/prisma";
import { revalidatePath } from 'next/cache';

export async function createBook(formData) {
    try {
        await prisma.book.create({
            data: {
                name: formData.get('name'),
                author: formData.get('author'),
                description: formData.get('description'),
                status: formData.get('status')
            }
        });
        
        revalidatePath('/');
        
        return { success: true };
    } catch (error) {
        console.error("Error creating book:", error);
        return { error: "Failed to create book" };
    }
}