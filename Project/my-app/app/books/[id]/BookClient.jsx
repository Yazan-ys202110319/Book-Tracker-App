'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function BookClient({ book }) {
    const router = useRouter();
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState(book.name);
    const [author, setAuthor] = useState(book.author);
    const [description, setDescription] = useState(book.description || '');
    const [isDeleting, setIsDeleting] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await fetch(`/api/books/${book.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, author, description }),
            });
            setShowForm(false);
            // Refresh the page to show updated data
            router.refresh();
        } catch (error) {
            console.error("Failed to update book:", error);
        }
    }

    async function handleDelete() {
        if (confirm("Are you sure you want to delete this book?")) {
            setIsDeleting(true);
            try {
                const response = await fetch(`/api/books/${book.id}`, {
                    method: 'DELETE',
                });
                
                if (response.ok) {
                    router.push('/');
                } else {
                    alert('Failed to delete book');
                    setIsDeleting(false);
                }
            } catch (error) {
                console.error("Error deleting book:", error);
                setIsDeleting(false);
            }
        }
    }

    return (
        <>
            {!showForm ? (
                <div className="flex gap-3 pt-6">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
                        onClick={() => setShowForm(true)}
                    >
                        Edit Book
                    </button>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md"
                        onClick={handleDelete}
                        disabled={isDeleting}
                    >
                        {isDeleting ? 'Deleting...' : 'Delete Book'}
                    </button>
                </div>            ) : (
                <form onSubmit={handleSubmit} className="space-y-4 mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Edit Book</h3>
                    <input
                        className="w-full text-black p-2 border rounded"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Book Title"
                    />
                    <input
                        className="w-full text-black p-2 border rounded"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        placeholder="Author"
                    />
                    <textarea
                        className="w-full text-black p-2 border rounded"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        rows={4}
                        placeholder="Description"
                    ></textarea>

                    <div className="flex gap-2">
                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Save Changes</button>
                        <button
                            type="button"
                            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </>
    );
}