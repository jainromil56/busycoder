import React, {useEffect, useState } from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allblogs)
  console.log(props)
  //useEffect to fetch data and useState to save it 

  return (
    <div>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.slug} className={styles.blogItem}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3>{blogitem.title}</h3>
              </Link>
              <p>{blogitem.content.substr(0,200)}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata")
  let myfile
  let allblogs = []
  for(let index=0; index<data.length; index++){
    const item = data[index]
    console.log(item)
    myfile = await fs.promises.readFile(('blogdata/'+item), 'utf-8')
    allblogs.push(JSON.parse(myfile))
  }
  
  return {
    props: {allblogs}, // will be passed to the page component as props
  }
}

export default Blog