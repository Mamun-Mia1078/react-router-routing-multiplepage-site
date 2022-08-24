import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { blogsData } from '../data'

const Blogs = () => {
    const [blogs,setBlogs]= useState(blogsData)
    const truncateString = (str, num) => {
        if(str.length>num){
            return str.slice(0,num) + "..."
        }else {
            return str; 
        }
        
    }
  return (
    <div>
        <h1>
            Knowledge of Web Development
        </h1>
        <section>
            {blogs.map((blog) => {
                const {id,title,body} = blog
                return <article key={id}>
                    <h1> {title} </h1>
                    <p> {truncateString(body,500)} </p>
                    <Link to={title} state = {{id,title, body}} >Learn More...</Link>
                </article>
            })}
        </section>
      
    </div>
  )
}

export default Blogs