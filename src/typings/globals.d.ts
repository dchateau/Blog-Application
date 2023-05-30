import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { Asset } from "contentful";
import { ParsedUrlQuery } from "querystring";

export interface PathType extends ParsedUrlQuery {
  slug: string;
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
