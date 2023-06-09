const contentful = require("contentful");
const fs = require("fs");
require("dotenv").config();

const {
  CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
} = process.env;

const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  environment: CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,
});

const entries = client
  .getEntries()
  .then((data) => {
    // console.log(data.items[10].fields);
    // const [siteEntry] = data.items.filter((entry) => {
    // //   console.log(entry.sys.contentType);
    //   return entry.sys.contentType.sys.id === "sites";
    // });
    // console.log(siteEntry);
    // // console.log(siteEntry.sys.contentType);
    const siteEntry = data.items.filter(
      (entry) =>
        entry.sys.contentType.sys.id === "post" ||
        entry.sys.contentType.sys.id === "category" ||
        entry.sys.contentType.sys.id === "author"
    );

    const jsonString = JSON.stringify(siteEntry, null, 2);
    const filePath = "./public/data.json";
    console.log("Data to be saved into a file");

    fs.writeFileSync(filePath, jsonString, (error) => {
      if (error) console.error("Failed to save JSON", error);
      else console.log("JSON successfully saved to: ", filePath);
    });
    // console.log(jsonString);
  })
  .catch((error) => console.log("Something went wrong"));
