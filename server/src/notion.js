import { Client, LogLevel } from '@notionhq/client';
import dotenv from 'dotenv';
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
        const page = await getBlocks(page_id);

        const pagePromises = page.results.map((result) => {
            if (result.has_children) {
                const childrenBlocks = getBlocks(result.id);
                result.childrens = childrenBlocks;
            }
            return result;
        });

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
