import {
  Author,
  Category,
  PostFields,
} from "@typings/contentful";
import { Document } from "@contentful/rich-text-types";
import fileData from "../../../public/data.json";

const getPostBySlug = (filterSlug: string): PostFields => {
  //   console.log("PostBy: ", filterSlug);
  let post:any;
  [post] = fileData.filter((item) => item.fields.slug === filterSlug);
  //   console.log("Filteres post: ", post);

  const {
    author,
    body,
    categories,
    creationDate,
    excerpt,
    featuredImage,
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

  const featuredImageAsAsset: any = { ...featuredImage };
  delete featuredImageAsAsset.metadata;

  const categoriesWithType: Category[] = categories.map((category:any) => ({ ...category }));

  
  // delete body.data;
  const bodyWithType: Document = body;

  const formattedPost: PostFields = {
    author: authorContent,
    body: bodyWithType,
    categories: categoriesWithType,
    creationDate: creationDate || "",
    excerpt: excerpt || "",
    metaDescription: metaDescription || "",
    metaKeywords: metaKeywords || [],
    readingTime: readingTime || 1,
    slug: slug || "",
    thumbnail: thumbnailAsAsset,
    featuredImage: featuredImageAsAsset,
    title: title,
  };

  return formattedPost;
};

export default getPostBySlug;
