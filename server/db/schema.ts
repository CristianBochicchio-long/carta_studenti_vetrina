import { pgTable, text, timestamp, boolean, integer, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

// Tabella per gli iscritti alla newsletter
export const newsletters = pgTable("newsletters", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  nome: varchar({ length: 255 }),
  iscritto: boolean().default(true).notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

// Tabella per gli studenti con carta
export const studenti = pgTable("studenti", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  nome: varchar({ length: 255 }).notNull(),
  cognome: varchar({ length: 255 }).notNull(),
  numeroMatricola: varchar({ length: 255 }).unique(),
  codiceCarta: varchar({ length: 50 }).unique().notNull(),
  attivo: boolean().default(false).notNull(),
  dataAcquisto: timestamp(),
  dataScadenza: timestamp(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

// Tabella per gli sconti/notifiche
export const sconti = pgTable("sconti", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  titolo: varchar({ length: 255 }).notNull(),
  descrizione: text().notNull(),
  categoria: varchar({ length: 50 }).notNull(), // sport, cibo, salute, abbigliamento, varie
  nomeNegozio: varchar({ length: 255 }).notNull(),
  percentuale: integer(), // percentuale di sconto
  dataInizio: timestamp().notNull(),
  dataFine: timestamp().notNull(),
  notificatoAgli: text(), // JSON array di email notificate
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

// Tabella per i messaggi di contatto
export const messaggiContatti = pgTable("messaggi_contatti", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  nome: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  oggetto: varchar({ length: 255 }).notNull(),
  messaggio: text().notNull(),
  letto: boolean().default(false).notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});

// Zod schemas per validazione
export const insertNewsletterSchema = createInsertSchema(newsletters);
export const selectNewsletterSchema = createSelectSchema(newsletters);
export type Newsletter = z.infer<typeof selectNewsletterSchema>;
export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;

export const insertStudentiSchema = createInsertSchema(studenti);
export const selectStudentiSchema = createSelectSchema(studenti);
export type Studente = z.infer<typeof selectStudentiSchema>;
export type InsertStudente = z.infer<typeof insertStudentiSchema>;

export const insertScontiSchema = createInsertSchema(sconti);
export const selectScontiSchema = createSelectSchema(sconti);
export type Sconto = z.infer<typeof selectScontiSchema>;
export type InsertSconto = z.infer<typeof insertScontiSchema>;

export const insertMessaggiContattiSchema = createInsertSchema(messaggiContatti);
export const selectMessaggiContattiSchema = createSelectSchema(messaggiContatti);
export type MessaggioContatti = z.infer<typeof selectMessaggiContattiSchema>;
export type InsertMessaggioContatti = z.infer<typeof insertMessaggiContattiSchema>;
