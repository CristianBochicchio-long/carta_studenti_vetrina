import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, newsletters, messaggiContatti, sconti } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Newsletter functions
export async function subscribeNewsletter(email: string, nome?: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot subscribe: database not available");
    return;
  }

  try {
    const existing = await db.select().from(newsletters).where(eq(newsletters.email, email)).limit(1);
    
    if (existing.length > 0) {
      if (!existing[0].iscritto) {
        await db.update(newsletters).set({ iscritto: 1, nome }).where(eq(newsletters.email, email));
      }
      return existing[0];
    }

    const result = await db.insert(newsletters).values({ email, nome, iscritto: 1 });
    return result;
  } catch (error) {
    console.error("[Database] Failed to subscribe:", error);
    throw error;
  }
}

export async function unsubscribeNewsletter(email: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot unsubscribe: database not available");
    return;
  }

  try {
    await db.update(newsletters).set({ iscritto: 0 }).where(eq(newsletters.email, email));
  } catch (error) {
    console.error("[Database] Failed to unsubscribe:", error);
    throw error;
  }
}

// Contact message functions
export async function saveContactMessage(nome: string, email: string, oggetto: string, messaggio: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot save message: database not available");
    return;
  }

  try {
    const result = await db.insert(messaggiContatti).values({ nome, email, oggetto, messaggio, letto: 0 });
    return result;
  } catch (error) {
    console.error("[Database] Failed to save message:", error);
    throw error;
  }
}

// Note: Student cards are physical, no digital card management needed
