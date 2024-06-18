import client from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
      const books = await client.entry.findMany({
        select: {
            book: true,
        },
        distinct: ['book'],
      });
      return NextResponse.json(books)
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to get all books", error },
        { status: 500},
      )
    }
  }