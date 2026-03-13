import { NextRequest, NextResponse } from "next/server"
import { db } from "@/db/db"
import { links } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params

  const result = await db
    .select()
    .from(links)
    .where(eq(links.code, code))

  if (!result.length) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  await db
    .update(links)
    .set({ views: (result[0].views ?? 0) + 1 })
    .where(eq(links.code, code))

  return NextResponse.redirect(result[0].url)
}