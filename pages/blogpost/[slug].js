import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blog.module.css'

const slug = (props) => {
  const [blog, setBlog] = useState(props.slugs);
  console.log(props)

  return (
    <div>
      <main  className={styles.main}>
      <h1> {blog && blog.title}</h1>   
      <hr/>
      <p className={styles.blogcontent}>{blog && blog.content}</p>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  
    const {slug} = context.query
    
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let slugs = await data.json()

  return {
    props: {slugs}, // will be passed to the page component as props
  }
}

export default slug