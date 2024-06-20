import client from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { book, page_number, title, tags, description, comments, favourite } =
      body;
    const newPost = await client.entry.create({
      data: {
        book,
        title,
        page_number: Number(page_number),
        tags: tags.split(",").map((tag) => tag.trim()),
        description,
        comments,
        favourite: Boolean(favourite),
      },
    });
    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json(
      { status: 500 },
      { message: "Error creating post", error }
    );
  }
};

export const GET = async (req) => {
  try {
    const entries = await client.entry.findMany({});
    return NextResponse.json(entries);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get entries", error },
      { status: 500 }
    );
  }
};
