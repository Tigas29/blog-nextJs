export interface NotionDatabaseResponse {
  object: string;
  results: Result[];
  next_cursor?: any;
  has_more: boolean;
  type: string;
  page_or_database: Pageordatabase;
  request_id: string;
}

export interface Pageordatabase {}

export interface Result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Createdby;
  last_edited_by: Createdby;
  cover?: any;
  icon?: any;
  parent: Parent;
  archived: boolean;
  in_trash: boolean;
  properties: Properties;
  url: string;
  public_url?: any;
}

export interface Properties {
  slug: Slug;
  img: Img;
  preview: Slug;
  tags: Tags;
  title: Title;
}

export interface Title {
  id: string;
  type: string;
  title: Richtext[];
}

export interface Tags {
  id: string;
  type: string;
  multi_select: Multiselect[];
}

export interface Multiselect {
  id: string;
  name: string;
  color: string;
}

export interface Img {
  id: string;
  type: string;
  files: File2[];
}

export interface File2 {
  name: string;
  type: string;
  file: File;
}

export interface File {
  url: string;
  expiry_time: string;
}

export interface Slug {
  id: string;
  type: string;
  rich_text: Richtext[];
}

export interface Richtext {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Text {
  content: string;
  link?: any;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Createdby {
  object: string;
  id: string;
}
