/* API by Pushkar Yadav (https://pushkaryadav.in) */
import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  /* Path of the json directory */
  const jsonFolder = path.join(process.cwd(), "config");
  /* Read the json data file worksops.json */
  const json = await fs.readFile(jsonFolder + "/workshops.json", "utf8");
  res.status(200).json(json);
}
