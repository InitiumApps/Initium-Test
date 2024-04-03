// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import getContent from "./getContent";

type Data = {
  id: Number;
  content: String,
  level: String,
  subject: String
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  res.status(200).json(getContent());
}
