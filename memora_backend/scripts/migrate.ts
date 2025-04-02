import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const client = new Client({
  user: "postgres",
  password: "postgres",
  database: "memora_db",
  hostname: "localhost",
  port: 5432,
});

const migrationFiles = [
  "../db/migrations/001_create_users.sql",
  "../db/migrations/002_create_dreams.sql",
  "../db/migrations/003_create_lucid_dream_tips.sql",
  "../db/migrations/004_create_community_tables.sql",
  "../db/migrations/005_add_search_indexes.sql",
];

async function runMigrations() {
  try {
    await client.connect();

    for (const file of migrationFiles) {
      const sql = await Deno.readTextFile(new URL(file, import.meta.url));
      await client.queryArray(sql);
      console.log(`Executed migration: ${file}`);
    }

    console.log("All migrations completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await client.end();
  }
}

await runMigrations();
