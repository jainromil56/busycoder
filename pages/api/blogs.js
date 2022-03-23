// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

// converted function to aynchronous
export default async function handler(req, res) {
  // console.log(res)

  //readdir for reading directory by nodeJs
  //readFile for reading file by nodeJs

  // used await function so that it can read one after another and can get time to read all files
  let data = await fs.promises.readdir('blogdata')
  let myfile
  let allblogs = []
  for(let index = 0; index < data.length; index++){
    const item = data[index];
    console.log(item)
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    // myFile contains all data of blogs
    allblogs.push(JSON.parse(myfile))
  }
  res.status(200).json( allblogs )
  // fs.readdir("blogdata",'utf-8', (err, data)=>{
  //   console.log(data)
  //   data.forEach((item) => {
  //     console.log(item)
  //     // readfile(path, callback)
  //     fs.readFile(('blogdata/' + item), ()=>{

  //     })
  //   })
  // })
}
