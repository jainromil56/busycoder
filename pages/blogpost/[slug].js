import React, { useEffect, useState } from "react";
import styles from "../../styles/blog.module.css";
import * as fs from "fs";

const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }

  const [blog, setBlog] = useState(props.myblog);
  console.log(props);

  return (
    <div>
      <main className={styles.main}>
        <h1> {blog && blog.title}</h1>
        <hr />
        <p className={styles.blogcontent}>
          {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
        </p>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "learn-flask" } },
      { params: { slug: "learn-javascript" } },
      { params: { slug: "learn-nextjs" } },
    ],
    fallback: true, //false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let data = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myblog: JSON.parse(data) }, // will be passed to the page component as props
  };
}

export default Slug;
