import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Tabella per gli iscritti alla newsletter
export const newsletters = mysqlTable("newsletters", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  nome: varchar("nome", { length: 255 }),
  iscritto: int("iscritto").default(1).notNull(), // 1 = true, 0 = false
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Newsletter = typeof newsletters.$inferSelect;
export type InsertNewsletter = typeof newsletters.$inferInsert;

// Note: Student cards are physical, no digital card management needed

// Tabella per gli sconti/notifiche
export const sconti = mysqlTable("sconti", {
  id: int("id").autoincrement().primaryKey(),
  titolo: varchar("titolo", { length: 255 }).notNull(),
  descrizione: text("descrizione").notNull(),
  categoria: varchar("categoria", { length: 50 }).notNull(), // sport, cibo, salute, abbigliamento, varie
  nomeNegozio: varchar("nomeNegozio", { length: 255 }).notNull(),
  percentuale: int("percentuale"), // percentuale di sconto
  dataInizio: timestamp("dataInizio").notNull(),
  dataFine: timestamp("dataFine").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Sconto = typeof sconti.$inferSelect;
export type InsertSconto = typeof sconti.$inferInsert;

// Tabella per i messaggi di contatto
export const messaggiContatti = mysqlTable("messaggi_contatti", {
  id: int("id").autoincrement().primaryKey(),
  nome: varchar("nome", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  oggetto: varchar("oggetto", { length: 255 }).notNull(),
  messaggio: text("messaggio").notNull(),
  letto: int("letto").default(0).notNull(), // 1 = true, 0 = false
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type MessaggioContatti = typeof messaggiContatti.$inferSelect;
export type InsertMessaggioContatti = typeof messaggiContatti.$inferInsert;