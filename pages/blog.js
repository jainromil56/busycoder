import React from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <div>
      
      <main className={styles.main}>
      <div className="blogs">
          {/* <h2>Popular Blogs</h2> */}
          <div className={styles.blogItem}>
            <Link href={'/blogpost/learn-javascript'}>
            <h3>How to learn javascript in 2021?</h3> 
            </Link>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <Link href={'/blogpost/learn-javascript'}>
            <h3>How to learn javascript in 2021?</h3> 
            </Link>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <Link href={'/blogpost/learn-javascript'}>
            <h3>How to learn javascript in 2021?</h3> 
            </Link>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <Link href={'/blogpost/learn-javascript'}>
            <h3>How to learn javascript in 2021?</h3> 
            </Link>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
        </div>
        </main>
    </div>
  )
}

export default Blog