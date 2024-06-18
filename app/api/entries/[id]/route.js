import client from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
      const { id } = params;
      const entry = await client.entry.findUnique({
        where: {
          id,
        },
      });
      if (!entry) {
        return NextResponse.json({ status: 404 }, { message: "Not Found" });
      }
      return NextResponse.json(entry)
    } catch (error) {
      return NextResponse.json(
        { status: 500 },
        { message: "error getting post", error }
      );
    }
  };

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { id } = params;
    const { title, description, page_number, tags, comments, book, favourite} = body;
    const updatePost = await client.entry.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        page_number: Number(page_number),
        tags: tags.split(',').map(tag => tag.trim()),
        comments,
        book,
        favourite: Boolean(favourite)
      },
    });
    if (!updatePost) {
      return NextResponse.json({ status: 404 }, { message: "post not found" });
    }
    return NextResponse.json(updatePost);
  } catch (error) {
    return NextResponse.json(
      { status: 500 },
      { message: "error updating post", error }
    );
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;
    await client.entry.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ status: 200 }, { message: "Post deleted" });
  } catch (error) {
    return NextResponse.json(
      { status: 500 },
      { message: "Error deleting post", error }
    );
  }
};
