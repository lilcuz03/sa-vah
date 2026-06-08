const fs = require("fs");
const p = "c:/Coding/Sah_veh/app/app/data/blogs.ts";
const text = fs.readFileSync(p, "utf8");
const slugRegex = /slug:\s*['\"]([^'\"]+)['\"]/g;
const slugs = [];
let m;
while ((m = slugRegex.exec(text))) {
  slugs.push(m[1]);
}
const blocks = text.split(/\},\s*\n\s*\{\s*\n/).slice(1);
const bad = [];
blocks.forEach((b, i) => {
  const contentMatch = b.match(/content:\s*`([\s\S]*?)`\s*,\s*$/m);
  if (!contentMatch) return;
  const content = contentMatch[1];
  const linkRegex = /<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  let lm;
  while ((lm = linkRegex.exec(content))) {
    const href = lm[1];
    if (href.startsWith("/blog/")) {
      const slug = href
        .split("/blog/")[1]
        .replace(/\?.*$/, "")
        .replace(/\/.*/, "");
      if (slug && !slugs.includes(slug))
        bad.push({ post: i + 1, href, slug, text: lm[2] });
    }
  }
});
console.log("slugs", slugs.length, slugs.join(","));
console.log("broken links", bad);
