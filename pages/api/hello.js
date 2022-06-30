// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";
export default function handler(req, res) {
  const lokasi = path.join(__dirname+"../../../../../database");
  const UASjson = fs.readFileSync(`${lokasi}/UAS.json`,
  {encoding:"utf-8"});
  res.status(200).json({UASjson: JSON.parse(UASjson)});
}
