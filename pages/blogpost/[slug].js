import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blog.module.css'

const slug = () => {
  const [blog, setBlog] = useState();
  const router = useRouter()
  useEffect(() => {
    if(!router.isReady) return;
    const {slug} = router.query
    
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
      return a.json();
    }).then((parsed) =>{
      console.log(parsed)
      setBlog(parsed)
    })
  },[router.isReady])


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

export default slug