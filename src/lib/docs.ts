import fs from "fs";
import path from "path";

export interface DocItem {
  title: string;
  slug: string;
  description: string;
  order: number;
  content: string;
}

const docsDirectory = path.join(process.cwd(), "src/content/docs");

export function getAllDocs(): DocItem[] {
  if (!fs.existsSync(docsDirectory)) return [];
  const fileNames = fs.readdirSync(docsDirectory);
  const docs: DocItem[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".md")) continue;
    const fullPath = path.join(docsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Extract frontmatter
    const match = fileContents.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) continue;

    const frontmatterRaw = match[1];
    const content = match[2];

    const titleMatch = frontmatterRaw.match(/title:\s*["']?([^"'\r\n]+)["']?/);
    const slugMatch = frontmatterRaw.match(/slug:\s*["']?([^"'\r\n]+)["']?/);
    const descMatch = frontmatterRaw.match(/description:\s*["']?([^"'\r\n]+)["']?/);
    const orderMatch = frontmatterRaw.match(/order:\s*(\d+)/);

    docs.push({
      title: titleMatch ? titleMatch[1] : fileName.replace(".md", ""),
      slug: slugMatch ? slugMatch[1] : fileName.replace(/^\d+-/, "").replace(".md", ""),
      description: descMatch ? descMatch[1] : "",
      order: orderMatch ? parseInt(orderMatch[1], 10) : 99,
      content
    });
  }

  return docs.sort((a, b) => a.order - b.order);
}

export function getDocBySlug(slug: string): DocItem | undefined {
  const allDocs = getAllDocs();
  return allDocs.find((doc) => doc.slug === slug);
}
