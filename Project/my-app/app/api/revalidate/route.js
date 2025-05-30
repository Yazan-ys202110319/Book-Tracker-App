import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const path = searchParams.get('path') || '/';
    
    try {
        revalidatePath(path);
        return NextResponse.json({
            revalidated: true,
            now: Date.now(),
            path
        });
    } catch (error) {
        console.error('Revalidation error:', error);
        return NextResponse.json({
            revalidated: false,
            now: Date.now(),
            error: error.message
        }, { status: 500 });
    }
}
