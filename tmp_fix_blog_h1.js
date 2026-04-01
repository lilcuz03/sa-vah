const fs = require("fs");
const file = "c:/Coding/Sah_veh/app/app/data/blogs.ts";
let source = fs.readFileSync(file, "utf8");
const updated = source.replace(
  /(title:\s*"([^"]+)"[\s\S]*?content:\s*`)([\s\S]*?)(`\s*,\s*\n\s*\},)/g,
  (match, prefix, title, content, suffix) => {
    const h1Template = `<h1 style="font-size:32px;margin-bottom:16px;"><strong>${title}</strong></h1>`;
    let newContent;
    if (/<h1[\s\S]*?<\/h1>/i.test(content)) {
      newContent = content.replace(/<h1[\s\S]*?<\/h1>/i, h1Template);
    } else {
      newContent = h1Template + "\n\n" + content.trim();
    }
    return prefix + newContent + suffix;
  },
);
fs.writeFileSync(file, updated, "utf8");
console.log("Updated blog h1 headings to match titles.");
