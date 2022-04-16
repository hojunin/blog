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
      // filter: {
      //   property: "status",
      //   select: {
      //     equals: "done",
      //   },
      // },
    });

    return data;
  } catch (error) {
    console.error(error.body);
  }
}

export async function getPage(page_id) {
  try {
    const data = await notion.pages.retrieve({
      page_id: "e1b4cf75936d489b937e6f16bcb7caaa",
    });
    const childrens = await notion.blocks.children.list({
      block_id: "e1b4cf75936d489b937e6f16bcb7caaa",
      page_size: 50,
    });
    return childrens;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}
