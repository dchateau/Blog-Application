import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { Asset } from "contentful";
import { ParsedUrlQuery } from "querystring";

export interface Params extends ParsedUrlQuery {
  slug: string;
}

export interface Route {
  id: string;
  title: string;
}

export interface DisqusConfig {
  url: string;
  identifier: string;
  title: string;
  language?: string;
}

export interface DrawerWidths {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

export interface EntryProps {
  title: string;
  creationDate: string;
  metaDescription: string;
  metaKeywords: string[];
  readingTime: number;
}

export interface EntryItemProps {
  authors: Array<string>;
  date: Date;
  entryId: string;
  excerpt: string;
  imageUrl: string;
  readingTime: number;
  slug: string;
  title: string;
}
