import { Author, PostFields } from "@typings/contentful";
import data from "../../../public/data.json";

const getPostBySlug = (filterSlug: string): PostFields => {
  //   console.log("PostBy: ", filterSlug);
  const [post] = data.filter((item: any) => item.fields.slug === filterSlug);
  //   console.log("Filteres post: ", post);

  const {
    author,
    creationDate,
    excerpt,
    metaDescription,
    metaKeywords,
    readingTime,
    slug,
    thumbnail,
    title,
  } = post.fields;

  const authorContent: Author[] = author.map((author: any) => {
    const filteredFields: Author = { ...author };
    // console.log("Author", fields);
    return filteredFields;
  });
  // delete authorContent.metadata;
  // console.log("Author: ", authorContent);
  const thumbnailAsAsset: any = { ...thumbnail };
  delete thumbnailAsAsset.metadata;

  const formattedPost: PostFields = {
    author: authorContent,
    creationDate: creationDate || "",
    excerpt: excerpt || "",
    metaDescription: metaDescription || "",
    metaKeywords: metaKeywords || [],
    readingTime: readingTime || 1,
    slug: slug || "",
    thumbnail: thumbnailAsAsset,
    title: title,
  };

  return formattedPost;
};

export default getPostBySlug;
