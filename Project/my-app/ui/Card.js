import prisma from "@/repo/prisma";

export async function getAllBooks() {
    return await prisma.book.findMany();
} 