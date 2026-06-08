const fs = require("fs");
const https = require("https");
const http = require("http");
const path = "c:/Coding/Sah_veh/app/app/data/blogs.ts";
const text = fs.readFileSync(path, "utf8");
const blockRegex = /\{\s*id:\s*\d+,[\s\S]*?content:\s*`([\s\S]*?)`[\s\S]*?\}/g;
let blockMatch;
const externalLinks = new Map();
while ((blockMatch = blockRegex.exec(text))) {
  const content = blockMatch[1];
  const linkRegex = /<a[^>]+href="(https?:\/\/[^"\s]+)"[^>]*>([\s\S]*?)<\/a>/g;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(content))) {
    const url = linkMatch[1];
    const label = linkMatch[2].replace(/<[^>]+>/g, "").trim();
    if (!externalLinks.has(url)) externalLinks.set(url, { label, posts: [] });
    externalLinks.get(url).posts.push(blockMatch.index);
  }
}

const toCheck = Array.from(externalLinks.keys());
console.log("found", toCheck.length, "external links");

function checkUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith("https://") ? https : http;
    const req = client.request(
      url,
      { method: "HEAD", timeout: 10000 },
      (res) => {
        resolve({ url, status: res.statusCode });
      },
    );
    req.on("error", (err) =>
      resolve({ url, status: "error", error: err.message }),
    );
    req.on("timeout", () => {
      req.destroy();
      resolve({ url, status: "timeout" });
    });
    req.end();
  });
}

(async () => {
  const results = [];
  for (const url of toCheck) {
    const r = await checkUrl(url);
    results.push(r);
    console.log("checked", url, r.status);
  }
  const broken = results.filter((r) =>
    typeof r.status === "number" ? r.status >= 400 : true,
  );
  console.log("broken count", broken.length);
  if (broken.length > 0) {
    let newText = text;
    broken.forEach((r) => {
      const escapedUrl = r.url.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&");
      const linkR = new RegExp(
        `<a[^>]+href=\\"${escapedUrl}\\"[^>]*>([\\s\\S]*?)<\\/a>`,
        "g",
      );
      newText = newText.replace(linkR, "$1");
      console.log("removed link wrapper for", r.url);
    });
    fs.writeFileSync(path, newText, "utf8");
    console.log("updated blog file removing broken external links");
  }
})();
