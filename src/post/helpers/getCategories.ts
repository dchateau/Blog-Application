import data from "../../../public/data.json";
import { Category, CategoryFields } from "@typings/contentful";

const getCategories = (): CategoryFields[] => {
  const filteredCategories: Category[] = data.filter(
    (item) => item.sys.contentType.sys.id === "category"
  );
//   console.log("Categories: ", filteredCategories)
  const categories: CategoryFields[] = filteredCategories.map(
    (category: Category) => {
      const formattedCategory: CategoryFields = {
        title: category.fields.title,
        slug: category.fields.slug,
      };

      return formattedCategory;
    }
  );
    // console.log("Formatted categories: ", categories);
  return categories;
};

export default getCategories;
