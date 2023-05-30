import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface AuthorFields {
  /** Full name */
  fullName: string;

  /** Biography */
  biography?: Document | undefined;

  /** Slug */
  slug: string;

  /** Photo */
  photo?: Asset | undefined;
}

export interface Author extends Entry<AuthorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    contentType: {
      sys: {
        id: "author" | string;
        linkType: "ContentType" | string;
        type: "Link" | string;
      };
    };
  };
}

export interface CategoryFields {
  /** Title */
  title: string;

  /** slug */
  slug: string;
}

/** Category related to a post */

export interface Category extends Entry<CategoryFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "category" | string;
        linkType: "ContentType" | string;
        type: "Link" | string;
      };
    };
  };
  fields: CategoryFields;
}

export interface PostFields {
  /** Entry ID  */
  entryId?: string;

  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Creation date */
  creationDate: string;

  /** Meta description */
  metaDescription: string;

  /** Meta keywords */
  metaKeywords?: string[] | undefined;

  //   /** Featured image */
  //   featuredImage?: Asset | undefined;

  /** Thumbnail */
  thumbnail: Asset | undefined;

  /** Excerpt */
  excerpt: string;

  //   /** Body */
  //   body: Document;

  //   /** Author */
  author: Author[];

  //   /** Reading time */
  readingTime: number;

  //   /** Categories */
  //   categories?: Category[] | undefined;
}

/** This model includes the main structure for a post entry including: title, creation date, meta-information, excerpt, body, author and reading time. */

export interface Post extends Entry<PostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "post" | string;
        linkType: "ContentType" | string;
        type: "Link" | string;
      };
    };
  };
  fields: PostFields;
}

export type CONTENT_TYPE =
  | "author"
  | "bilingualSite"
  | "category"
  | "mobilePhone"
  | "person"
  | "post"
  | "site"
  | "sites"
  | "tag";
