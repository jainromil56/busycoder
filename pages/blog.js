import React, {useEffect, useState } from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  
  //useEffect to fetch data and useState to save it 
  useEffect(() => {
    console.log("UseEffect is running")
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json();
    }).then((parsed) =>{
      console.log(parsed)
      setBlogs(parsed)
    })
  },[])
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
        <div className="blogs">
          {/* <h2>Popular Blogs</h2> */}

          {/* <div className={styles.blogItem}>
            <Link href={"/blogpost/learn-javascript"}>
              <h3>How to learn javascript in 2021?</h3>
            </Link>
            <p>Javascript is the language used to design logic for the web</p>
          </div> */}
        </div>
      </main>
    </div>
  );
}

export default Blog