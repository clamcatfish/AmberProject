import client from "@/app/libs/prisma";

async function testConnection() {
  try {
    await client.$connect();
    console.log("Connected to the database");
    await client.$disconnect();
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

testConnection();