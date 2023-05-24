const contentful = require("contentful");
const fs = require("fs");
require("dotenv").config();

const client = contentful.createClient({
  space: process.env.SPACE_ID,
  environment: "Sandbox", // defaults to 'master' if not set
  accessToken: process.env.CDA_KEY,
});

const entries = client.withAllLocales
  .getEntries()
  .then((data) => {
    // console.log(data.items[10].fields);
    // const [siteEntry] = data.items.filter((entry) => {
    // //   console.log(entry.sys.contentType);
    //   return entry.sys.contentType.sys.id === "sites";
    // });
    // console.log(siteEntry);
    // // console.log(siteEntry.sys.contentType);

    const jsonString = JSON.stringify(data, null, 2);
    const filePath = "./public/data.json";

    fs.writeFileSync(filePath, jsonString, (error) => {
      if (error) console.error("Failed to save JSON", error);
      else console.log("JSON successfully saved to: ", filePath);
    });
    // console.log(jsonString);
  })
  .catch((error) => console.log("Something went wrong"));