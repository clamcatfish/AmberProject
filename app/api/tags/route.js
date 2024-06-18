import client from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
      const entries = await client.entry.findMany();
      const tags = new Set()

      entries.forEach(entry => {
        if (entry.tags && Array.isArray(entry.tags)) {
            entry.tags.forEach(tag => tags.add(tag))
        }
      })

      return NextResponse.json(Array.from(tags))
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to get all tags", error },
        { status: 500},
      )
    }
  }