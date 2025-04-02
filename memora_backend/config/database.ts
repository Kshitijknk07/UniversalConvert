import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const client = new Client({
  user: "postgres",
  password: "your_password",
  database: "memora_db",
  hostname: "localhost",
  port: 5432,
});

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL database");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
};

export { client as db };
