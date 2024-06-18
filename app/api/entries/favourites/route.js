import client from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
      const entries = await client.entry.findMany({
        where:
          {
            favourite: true
          }
      });
      return NextResponse.json(entries)
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to get favourites", error },
        { status: 500},
      )
    }
  }