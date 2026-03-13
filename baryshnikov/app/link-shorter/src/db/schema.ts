import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core"

export const links = pgTable("links", {
  code: text("code").primaryKey(),
  url: text("url").notNull(),
  views: integer("views").default(0),
  createdAt: timestamp("created_at").defaultNow()
})