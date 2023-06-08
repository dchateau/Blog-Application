import type { Author, Category, PostFields } from "@typings/contentful";
import data from "../../../public/data.json";

const getPosts = (): PostFields[] => {
  const posts: any[] = data.filter(
    (item) => item.sys.contentType.sys.id === "post"
  );

  const formattedPosts: PostFields[] = posts.map((item: any) => {
    const {
      author,
      categories,
      creationDate,
      excerpt,
      metaDescription,
      metaKeywords,
      readingTime,
      slug,
      thumbnail,
      title,
    } = item.fields;

    const entryId: string = item.sys.id;
    const authorContent: Author[] = author.map((author: any) => {
      const filteredFields: Author = { ...author };
      return filteredFields;
    });

    const thumbnailAsAsset: any = { ...thumbnail };
    delete thumbnailAsAsset.metadata;

    const categoriesWithType: Category[] = categories.map((category: any) => ({
      ...category,
    }));

    const entryProps: PostFields = {
      author: authorContent,
      categories: categoriesWithType,
      creationDate: creationDate || "",
      entryId,
      excerpt: excerpt || "",
      metaDescription: metaDescription || "",
      metaKeywords: metaKeywords || [],
      readingTime: readingTime || 1,
      slug: slug || "",
      thumbnail: thumbnailAsAsset,
      title: title,
    };
    return entryProps;
  });

  return formattedPosts;
};

export default getPosts;
