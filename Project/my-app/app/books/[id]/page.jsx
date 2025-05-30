import Link from "next/link";
import prisma from "@/repo/prisma";
import BookClient from "./BookClient";
import { ArrowLeft } from 'lucide-react';

export default async function BookPage({ params }) {
    const book = await prisma.book.findUnique({
        where: {
            id: params.id
        },
    });

    if (!book) {
        return <div className="min-h-screen flex items-center justify-center">Book not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <header className="mb-8">
                    <Link href="/">
                        <button className="bg-indigo-600 hover:bg-indigo-700 gap-2 text-white font-medium py-2 px-4 rounded-md flex items-center transition-colors">
                            <ArrowLeft />
                            Back to Library
                        </button>
                    </Link>
                </header>

                <main className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6 sm:p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">{book.name}</h1>
                        
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center">
                                <span className="text-gray-500 w-32">Author:</span>
                                <span className="text-gray-900 font-medium">{book.author}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-500 w-32">Status:</span>
                                <span className="text-gray-900 font-medium">{book.status}</span>
                            </div>
                            {book.description && (
                                <div className="pt-4 border-t border-gray-200">
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        {book.description}
                                    </p>
                                </div>
                            )}
                        </div>

                        <BookClient book={book} />
                    </div>
                </main>
            </div>
        </div>
    );
}