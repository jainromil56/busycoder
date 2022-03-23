// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8', (err, data)=>{
    if(err){
      res.status(500).json( {error: "Internal Server Error"} )
    }
    console.log(req.query.slug)
    // console.log(data)
    res.status(200).json( JSON.parse(data) )
  })
}
