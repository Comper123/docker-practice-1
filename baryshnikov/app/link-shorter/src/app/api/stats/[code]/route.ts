import { NextRequest, NextResponse } from "next/server"
import { db } from "../../../../db/db"
import { links } from "../../../../db/schema"
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

  return NextResponse.json({
    url: result[0].url,
    views: result[0].views,
    createdAt: result[0].createdAt
  })
}