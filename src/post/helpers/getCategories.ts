import data from "../../../public/data.json";
import type { Category, CategoryFields } from "@typings/contentful";

const getCategories = (): CategoryFields[] => {
  //@ts-ignore
  const filteredCategories: Category[] = data.filter(
    (item: any) => item.sys.contentType.sys.id === "category"
  );

  const categories: CategoryFields[] = filteredCategories.map(
    (category: Category) => {
      const formattedCategory: CategoryFields = {
        title: category.fields.title,
        slug: category.fields.slug,
      };

      return formattedCategory;
    }
  );

  return categories;
};

export default getCategories;
