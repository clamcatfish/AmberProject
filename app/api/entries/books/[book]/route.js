import client from "@/app/libs/prisma";
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const { book } = params;

  try {
    const entries = await client.entry.findMany({
      where: { book: book }
    });

    if (!entries || entries.length === 0) {
      return NextResponse.json({ message: 'No entries found for this book' }, { status: 404 });
    }

    return NextResponse.json(entries);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching entries for book', error }, { status: 500 });
  }
};

