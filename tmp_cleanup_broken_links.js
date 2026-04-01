const fs = require("fs");
const p = "c:/Coding/Sah_veh/app/app/data/blogs.ts";
let text = fs.readFileSync(p, "utf8");
const slugRegex = /slug:\s*['\"]([^'\"]+)['\"]/g;
const slugs = [];
let m;
while ((m = slugRegex.exec(text))) {
  slugs.push(m[1]);
}

const linkRegex = /<a([^>]+href=\"\/blog\/([^"]+)\"[^>]*)>([\s\S]*?)<\/a>/g;
text = text.replace(linkRegex, (match, attrs, slugWithRest, innerText) => {
  const slug = slugWithRest.replace(/\?.*$/, "").replace(/\/.*/, "");
  if (!slugs.includes(slug)) {
    return innerText;
  }
  return match;
});

fs.writeFileSync(p, text, "utf8");
console.log("Broken blog links removed (internal /blog/ only).");
