import { Client } from "postgres";

const client = new Client({
  user: "postgres",
  password: "postgres",
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
