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
    });

    return data;
  } catch (error) {
    console.error(error.body);
  }
}

export async function getPage(page_id) {
  try {
    const page = await getBlocks(page_id);
    let pagePromises = [];
    for (let result of page.results) {
      if (result.has_children) {
        const childrenBlocks = await getBlocks(result.id);
        result.childrens = childrenBlocks;
      }
      pagePromises.push(result);
    }

    const data = await Promise.all(pagePromises);

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getBlocks(block_id) {
  try {
    const blocks = await notion.blocks.children.list({
      block_id,
      page_size: 50,
    });

    return blocks;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}
