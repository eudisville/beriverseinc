import React from 'react'
import './Blog.css'

const Blog = ({ className, children }) => {
    return (
      <div className={`blog-card ${className}`}>
        {children}
      </div>
    );
  };

export default Blog