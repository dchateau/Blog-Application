import data from "../../../public/data.json";
import { PathType } from "@typings/globals";

const getDefinedPages = ()=> {
  const pages: string[] = data.map((item) => item.fields.slug);
  const formattedPaths = pages.map((page) => {
    return {
      params: { slug: page },
    };
  });

  return formattedPaths;
};

export default getDefinedPages;
