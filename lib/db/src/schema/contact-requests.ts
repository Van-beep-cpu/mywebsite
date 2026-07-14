import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const contactRequestsTable = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company"),
  email: text("email").notNull(),
  website: text("website"),
  service: text("service").notNull(),
  challenge: text("challenge").notNull(),
  goal: text("goal").notNull(),
  timeline: text("timeline").notNull(),
  budget: text("budget").notNull(),
  message: text("message").notNull(),
  privacyAccepted: boolean("privacy_accepted").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const insertContactRequestSchema = createInsertSchema(
  contactRequestsTable,
).omit({ id: true, createdAt: true });
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequestRow = typeof contactRequestsTable.$inferSelect;
