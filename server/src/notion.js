import { Client, LogLevel } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_ACCESS_KEY,
  logLevel: LogLevel.DEBUG,
});

export async function getDB() {
  try {
    const data = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_KEY,
      filter: {
        property: "status",
        select: {
          equals: "done",
        },
      },
    });

    return data;
  } catch (error) {
    console.error(error.body);
  }
}
