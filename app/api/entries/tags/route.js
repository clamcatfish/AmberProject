import client from "../../../libs/prisma";

import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

  const { searchParams } = new URL(request.url, 'http://localhost');
  const tags = searchParams.getAll('tags');

  if (!tags) {
    return NextResponse.json({ message: "Tags are required" }, { status: 400 });
  }

  const tagsArray = Array.isArray(tags) ? tags : [tags];

  try {
    const entries = await client.entry.findMany({
      where: {
        tags: {
          hasEvery: tagsArray,
        },
      },
    });

    if (!entries || entries.length === 0) {
      return NextResponse.json(
        { message: "No entries found for the specifed tags" },
        { status: 404 }
      );
    }

    return NextResponse.json(entries);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching entries for book", error },
      { status: 500 }
    );
  }
};
