import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
interface Data {
  message: String
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method !== "POST") return res.json({message: "POST Method Required"})
  const body = req.body;
  // push2srv.prod.nego-dev.com
  let dd = await axios.post("your own stats url", body)
  res.json({message: "Success"})
}