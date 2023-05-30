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
        id: "category";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface PostFields {
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

  /** Featured image */
  featuredImage?: Asset | undefined;

  /** Thumbnail */
  thumbnail: Asset;

  /** Excerpt */
  excerpt: string;

  /** Body */
  body: Document;

  /** Author */
  author: Author[];

  /** Reading time */
  readingTime: number;

  /** Categories */
  categories?: Category[] | undefined;
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
        id: "post";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
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
