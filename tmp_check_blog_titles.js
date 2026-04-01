const fs = require("fs");
const p = "c:/Coding/Sah_veh/app/app/data/blogs.ts";
const t = fs.readFileSync(p, "utf8");
const blocks = t.split(/\},\s*\n\s*\{\s*\n/).slice(1);
blocks.forEach((b, i) => {
  const titleMatch = b.match(/title:\s*"([^"]+)"/);
  const slugMatch = b.match(/slug:\s*"([^"]+)"/);
  const contentMatch = b.match(/content:\s*`([\s\S]*?)`\s*,\s*$/m);
  let h1 = "(none)";
  if (contentMatch) {
    const cm = contentMatch[1].match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    if (cm) h1 = cm[1].replace(/<[^>]+>/g, "").trim();
  }
  console.log(
    "id",
    i + 1,
    "title",
    titleMatch && titleMatch[1],
    "h1",
    h1,
    "slug",
    slugMatch && slugMatch[1],
  );
});
