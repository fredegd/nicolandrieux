import path from "path";
import fs from "fs/promises";

export async function getData() {
  const filePath = path.join(process.cwd(), "src", "allWorks.json");
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData.toString());
  return data;
}
