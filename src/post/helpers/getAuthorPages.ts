import fileData from "../../../public/data.json";

const getAuthorPages = () => {
  let paths: (string | any)[];
  const authors = fileData.filter(
    (author: any) => author.sys.contentType.sys.id === "author"
  );
  paths = authors.map((item) => item.fields.slug);
  paths = paths.map((page: string) => ({
    params: { slug: page },
  }));

  return paths;
};

export default getAuthorPages;
