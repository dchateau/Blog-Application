import type { Document } from "@contentful/rich-text-types";
import type { AuthorFields } from "@typings/contentful";

import fileData from "../../../public/data.json";

const getAuthorBySlug = (authorSlug: string): AuthorFields => {
  let author: any;

  author = fileData.filter(
    (author: any) => author.sys.contentType.sys.id === "author"
  );
  [author] = author.filter((author: any) => author.fields.slug === authorSlug);

  const { biography, fullName, photo, resume, slug } = author.fields;

  const biographyWithType: Document = biography;
  const photoAsAsset = { ...photo };
  delete photoAsAsset.metadata;

  const formattedAuthor: AuthorFields = {
    biography: biographyWithType,
    fullName: fullName || "",
    photo: photoAsAsset,
    resume,
    slug,
  };

  return formattedAuthor;
};

export default getAuthorBySlug;
