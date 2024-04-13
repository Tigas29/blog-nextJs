"use server";

import { Client } from "@notionhq/client";
import { NotionDatabaseResponse } from "../_types/notion";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = "67213dab1b784b038068e39a93ebee79";

export async function getPosts() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
  });
  // console.log(JSON.stringify(response, null, 2));

  const typedResponse = response as unknown as NotionDatabaseResponse;

  return typedResponse.results.map((post) => {
    return {
      id: post.id,
      title: post.properties.title.title[0].plain_text,
      slug: post.properties.slug.rich_text[0].plain_text,
      createdAt: post.created_time,
      imgUrl: post.properties.img.files[0].file.url,
      preview: post.properties.preview.rich_text[0].plain_text,
    };
  });
}

export async function getPost(slug: string) {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      or: [
        {
          property: "slug",
          rich_text: {
            equals: slug,
          },
        },
      ],
    },
  });

  const pageId = response.results[0].id;

  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  const typedResponse = response as unknown as NotionDatabaseResponse;

  return {
    title: typedResponse.results[0].properties.title.title[0].plain_text,
    content: mdString.parent,
  };
}
