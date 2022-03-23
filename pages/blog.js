import React, {useEffect, useState } from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'

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

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allblogs = await data.json()
  
  return {
    props: {allblogs}, // will be passed to the page component as props
  }
}

export default Blog