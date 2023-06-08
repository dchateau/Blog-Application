import data from "../../../public/data.json";

const getDefinedPages = () => {
  let paths: (string | any)[];
  const posts: any[] = data.filter(
    (item: any) => item.sys.contentType.sys.id === "post"
  );
  paths = posts.map((item: any) => item.fields.slug);
  paths = paths.map((page: string) => ({
    params: { slug: page },
  }));

  return paths;
};

export default getDefinedPages;
