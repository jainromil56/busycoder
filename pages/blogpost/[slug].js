import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blog.module.css'

const slug = () => {
    const router = useRouter()
    const {slug} = router.query

  return (
    <div>
      <main  className={styles.main}>
      <h1> The title is {slug}</h1>
      <hr/>
      <p className={styles.blogcontent}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat magnam non, ut hic consequatur, alias libero id animi voluptates, quasi dicta. <br/><br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis corporis quaerat, sunt culpa quibusdam unde, perspiciatis deserunt modi temporibus tempore tenetur nam aut. Distinctio aliquid exercitationem ipsa voluptatum rem officiis vitae, laboriosam dolore, voluptatem harum, nam veritatis magni ullam nemo nostrum id. Quo, iste!
      </p>
      </main>
    </div>
  )
}

export default slug