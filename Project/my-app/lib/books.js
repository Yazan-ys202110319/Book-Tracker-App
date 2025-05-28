import prisma from "@/repo/prisma";
import { useState } from "react";



export async function getAllBooks() {
    return await prisma.book.findMany();
} 