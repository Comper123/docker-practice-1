CREATE TABLE "links" (
	"code" text PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"views" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
