const fs = require("fs");
const p = "c:/Coding/Sah_veh/app/app/data/blogs.ts";
const t = fs.readFileSync(p, "utf8");
const items = t.split("content: `").slice(1);
items.forEach((v, i) => {
  const c = v.split("`")[0];
  console.log("blog", i + 1, "length", c.length);
});
