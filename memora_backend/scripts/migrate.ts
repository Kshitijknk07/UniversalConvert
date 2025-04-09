import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const client = new Client({
  user: "postgres",
  password: "postgres",
  database: "memora_db",
  hostname: "localhost",
  port: 5432,
});

const migrationFiles = [
  "../db/migrations/000_create_users_table.sql",
  "../db/migrations/001_create_dreams_table.sql",
  "../db/migrations/002_create_dream_images_table.sql",
  "../db/migrations/003_create_lucid_dream_tips.sql",
  "../db/migrations/004_create_community_tables.sql",
  "../db/migrations/005_add_search_indexes.sql",
  "../db/migrations/006_create_admin_tables.sql",
];

async function runMigrations() {
  try {
    await client.connect();
    let successCount = 0;

    for (const file of migrationFiles) {
      try {
        const sql = await Deno.readTextFile(new URL(file, import.meta.url));
        await client.queryArray(sql);
        console.log(`Executed migration: ${file}`);
        successCount++;
      } catch (error) {
        console.error(`Error executing migration ${file}:`, error);
        // Continue with next migration
      }
    }

    console.log(
      `Migrations completed: ${successCount}/${migrationFiles.length} successful`
    );
  } catch (error) {
    console.error("Migration process failed:", error);
  } finally {
    await client.end();
  }
}

await runMigrations();
